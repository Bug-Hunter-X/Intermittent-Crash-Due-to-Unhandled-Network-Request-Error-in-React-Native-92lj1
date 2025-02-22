```javascript
// In a React Native component

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('some-api-endpoint');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        // Handle errors properly
        console.error('Error fetching data:', error);
        //Consider setting an error state to display to the user
      }
    };

    fetchData();
  }, []);

  if (data === null) {
    return <Text>Loading...</Text>;
  }

  // ... rest of the component using the data
  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};
```