class BannedCountriesService {
    private _bannedCountries: string[] = ["South Africa", "Russia", "Belarus"];
  
    get list(): string[] {
      return this._bannedCountries;
    }
  
    add(country: string) {
      if (!this._bannedCountries.includes(country)) {
        this._bannedCountries.push(country);
      }
    }

    delete(country: string) {
      const index = this._bannedCountries.indexOf(country);
      if (index > -1) {
        this._bannedCountries.splice(index, 1);
      }
    }
  }
  
  const BannedCountries = new BannedCountriesService();
  export default BannedCountries;
  