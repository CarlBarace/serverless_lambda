"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello World and Hello Carl!"
      },
      null,
      2
    ),
  };
};
