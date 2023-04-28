import { useContext } from "react";
import { AppContext } from "../AppContext";

export function ApiInput() {
  const { apiKey, setApiKey } = useContext(AppContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("apiKey", apiKey);
  };

  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="api-key"
          className="block text-sm font-medium text-gray-700"
        >
          API Key
        </label>
        <div className="mt-1">
          <input
            id="api-key"
            name="api-key"
            type="text"
            required
            value={apiKey}
            onChange={handleApiKeyChange}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save API Key
        </button>
      </div>
    </form>
  );
}
