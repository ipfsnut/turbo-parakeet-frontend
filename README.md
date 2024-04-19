# Turbo-Parakeet 

Turbo-Parakeet is an application designed for the Texas Tech University Cognitive Anthrozoology lab by a first-year Ph.D student. The concept is an interface between ordinary people and an API that enables users to analyze images of faces for emotion, managing to be both lightweight and simple to use. 

Create React App, Node.js, Express, and Replit will be used to create a  application that allows a user to login, upload files (images of faces for now), pin those files to IPFS or alternatively serve them from directories at the deployment URL, retrieve the or URL of each file, and then, at a rate of 20/minute or slower, send each image to the SmartClick API (or other API in the future) and display the results returned from SmartClick to the user. The results will appear in a modal and a CSV file that the user can download. After the user logs off, the pins to IPFS documents are removed and the server cache is cleared - the application is reset and ready for the next user. No personal data has been compromised or leaked. 

## Relevant technologies:

Create React App
Express
Node.js
Replit
IPFS
SmartClick Emotion Detection API
Arbitrary additional APIs


# File Upload App Functions
This project is a file upload application built with React and Node.js. It allows users to upload files from their local machine, which are temporarily stored on the server during processing and then automatically deleted after the operation is complete. This approach ensures that sensitive data is not persistently stored on the server, enhancing security and compliance with regulations like HIPAA or IRB standards.

# Project Overview
The application is designed to provide a secure and compliant way of handling file uploads, particularly for sensitive data or applications that require strict data handling and disposal practices. By leveraging Netlify's serverless architecture and ephemeral file storage, the risk of data breaches or unauthorized access to the uploaded files is minimized.

The client-side application is built with React and handles the user interface for file selection and upload. The server-side functionality is implemented using Netlify Serverless Functions, which are stateless and automatically scale based on incoming requests.

## Features
Secure File Uploads: Files are uploaded over an encrypted HTTPS connection, ensuring secure data transmission.
Ephemeral File Storage: Uploaded files are stored locally within the Netlify Function's instance and are automatically deleted after processing, preventing persistent storage on the server.
Authentication and Authorization: Netlify Functions can be configured to require authentication and authorization for access, ensuring that only authorized users or applications can upload files.
Compliance-friendly: By ensuring that uploaded files are not persistently stored and are automatically deleted after processing, the application can potentially comply with regulations like HIPAA or IRB standards that require strict data handling and disposal practices for sensitive information.



