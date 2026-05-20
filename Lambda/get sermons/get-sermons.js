import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "eu-north-1" });
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async () => {
  try {
    const command = new ScanCommand({
      TableName: "Sermons",
      FilterExpression: "published = :published",
      ExpressionAttributeValues: {
        ":published": true
      }
    });

    const response = await docClient.send(command);

    const sermons = response.Items || [];

    sermons.sort((a, b) => {
      return new Date(b.sermonDate) - new Date(a.sermonDate);
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS"
      },
      body: JSON.stringify(sermons)
    };

  } catch (error) {
    console.error("Error retrieving sermons:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        message: "Error retrieving sermons",
        error: error.message
      })
    };
  }
};