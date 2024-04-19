import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import CAZLabLogo from './assets/CAZLabLogo.png';
import Header from './components/Header';
import Footer from './components/Footer';
import { uploadFiles, getResults } from './utils/api';
import './App.css';

function App() {
  const [files, setFiles] = useState([]);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      setFiles(acceptedFiles);
      setIsLoading(true);
      setError(null);

      try {
        const uploadedFilesData = await uploadFiles(acceptedFiles);
        console.log('Uploaded files data:', uploadedFilesData);
        const processedResults = await getResults();
        setResults(processedResults);
      } catch (error) {
        setError('Error processing files');
        console.error('Error processing files:', error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const processedResults = await getResults();
        setResults(processedResults);
      } catch (error) {
        setError('Error fetching results');
        console.error('Error fetching results:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <div
          {...getRootProps()}
          style={{
            border: '2px dashed #ccc',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <input {...getInputProps()} />
          <p>Drag and drop a folder of images here, or click to select files</p>
        </div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div>
          {results.map((result) => (
            <div key={result.fileName}>
              <p>{result.fileName}</p>
              <pre>{JSON.stringify(result.jsonData, null, 2)}</pre>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
