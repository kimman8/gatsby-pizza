const nodemailer = require('nodemailer');

function generateOrderEmail({ order, total }) {
  return `<div>
    <h2>Your recent order for ${total}</h2>
    <p>please start walking over, we will have your order ready in the next 20 mins</p>
    <ul>
      ${order
        .map(
          (item) => `<li>
        <img src="${item.thumbnail}" alt="${item.name}"/>
        ${item.size} ${item.name} - ${item.price}
      </li>`
        )
        .join('')}
    </ul>
    <p>Your total is <strong>$${total}</strong> due at pick up</p>
    <style>
    ul{
      list-style:none;
    }
    </style>
  </div>`;
}

// create a transport for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function wait(ms = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

exports.handler = async (event, context) => {
  // await wait(5000);
  const body = JSON.parse(event.body);
  // check if the bots have filled out the honeypot
  if (body.mapleSyrup) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'boop beep bop zzz' }),
    };
  }
  console.log(body);
  // validate the data coming in is correct

  // make sure they actually have items in that order

  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `why would you order nothing?!`,
      }),
    };
  }

  // test send an email
  const info = await transporter.sendMail({
    from: 'Lucky Start <lucky@example.com>',
    to: `${body.name} <${body.email}>, orders@example.com`,
    subject: 'new order!',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};
