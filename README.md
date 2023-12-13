# Project Name

This is a sample project that showcases how to configure Multer in an Express application using TypeScript.

## Features

- Upload files to the server using Multer middleware
- Handle multiple file uploads
- Set file size and file type restrictions
- Rename uploaded files
- Handle file validation and error handling

## Prerequisites

- Node.js (version 20.10.0)
- npm (version 10.2.4)
- TypeScript (version 5.3.3)

## Installation

1. Clone the repository:

   git clone https://github.com/hamzapro305/Multer-FileUpload-TS.git

2. Navigate to the project directory:

   cd Multer-FileUpload-TS

3. Install the dependencies:

   npm i

## Configuration

1. Rename the .env.example file to .env.

2. Update the .env file with your desired configurations:

   PORT=3000
   UPLOAD_DESTINATION=./uploads
   MAX_FILE_SIZE=5000000

   - PORT: The port number on which the server will run.
   - UPLOAD_DESTINATION: The directory where uploaded files will be stored.
   - MAX_FILE_SIZE: The maximum allowed file size in bytes.

## Usage

1. Start the server:

   npm run start

2. Open your web browser and navigate to http://localhost:3000.

3. Use the provided UI or send a POST request to the /upload endpoint to upload files.

## API Endpoints

- POST /upload: Upload one or multiple files.

## File Structure
   <pre>
   ├── src/
   |   ├── @Types/
   │   │   └── MimeType.ts
   │   ├── controllers/
   │   │   └── TestController.ts
   │   ├── config/
   │   │   └── MulterConfig.ts
   │   ├── routes/
   │   │   └── TestRouter.ts
   ├── app.ts
   ├── uploads/
   ├── .env.example
   ├── .gitignore
   ├── package.json
   ├── tsconfig.json
   └── README.md
   </pre>

   - src/controllers/TestController.ts: Test Controller for handling file uploads.
   - src/config/MulterConfig.ts: Multer configuration.
   - src/routes/TestRouter.ts: Express routes for test file upload.
   - src/server.ts: Entry point of the application.
   - uploads/: Directory where uploaded files will be stored.
   - .env.example: Example environment variables file.
   - .gitignore: Git ignore file.
   - package.json: Package configuration.
   - tsconfig.json: TypeScript configuration.
   - README.md: This file.

## License

This project is licensed under the MIT License.

## Contributions

Contributions are welcome! If you find any issues or want to contribute to this project, please feel free to submit a pull request.