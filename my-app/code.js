// Variables:
var petroleumJellyStatements = ["Oil fuels the modern industry.","Gas drives the global economy.","Petroleum jelly heals skin.","Crude oil births many fuels.","Gasoline powers human travel.","Oil rigs stand in rough seas.","Petroleum forms over eons.","Vaseline softens dry hands.","Oil pipelines span countries.","Natural gas burns cleanly.","Refineries purify crude oil.","Oil wells pump Earth's core.","Energy lies beneath us all.","Petroleum comes from fossils.","Lubricants reduce machine wear.","Jet fuel is refined kerosene.","Diesel engines love crude oil.","Oil and water don’t mix up.","The Gulf flows with black gold.","Vaseline locks in moisture.","Plastic starts as crude oil.","Gas flares light up the sky.","Oil slicks harm ocean life.","Refining oil creates byproducts.","Fuel drives the human future.","Petroleum jelly seals cuts.","Oil trades rule world markets.","Pipeline leaks risk nature.","Black gold powers nations.","Crude oil births progress.","Petroleum fuels every car.","Vaseline protects your lips.","Crude oil fuels daily life.","Gas prices rise and fall fast.","Oil reserves shape politics.","Vaseline soothes cracked skin.","Oil lamps once lit the world.","Fossil fuels changed history.","Gas heats homes in winter.","Petroleum is Earth's energy.","Oil seeps mark rich fields.","Machines thirst for clean oil.","Gas turbines spin with power.","Petroleum fuels space travel.","Oceans hide vast oil beds.","Fuel refines into jet power.","Vaseline guards baby skin.","Oil barons built empires.","Gasoline ignites progress.","Crude oil has many uses.","Natural gas burns steady.","Vaseline aids first aid.","Oil markets never sleep.","Drilling reshapes geology.","Petroleum drives economies.","Gas storage ensures supply.","Lubricants protect engines.","Oil powers heavy industry.","Pipeline safety is vital.","Fuel prices shift nations.","Petroleum powers plastics.","Oil spills harm coastlines.","Gas extraction uses fracking.","Crude oil has thick weight.","Vaseline reduces friction.","Oil storage tanks tower.","Gas fields stretch wide.","Oil drilling takes precision.","Petroleum flows like blood.","Diesel fuels long hauls.","Oil exploration takes years.","Vaseline soothes irritation.","Refined fuel powers jets.","Petroleum is liquid wealth.","Oil creates synthetic fibers.","Gas pipelines cross borders.","Petroleum runs generators.","Oil shaped modern warfare.","Fuel shortages halt trade.","Oil engines changed travel.","Vaseline seals small cuts.","Petroleum keeps gears smooth.","Oil barrels measure value.","Gas expands when heated.","Petroleum fuels transport.","Crude oil forms underground.","Gas leaks can be deadly.","Oil refines into diesel.","Fuels empower economies.","Vaseline shines leather.","Oil protects moving parts.","Natural gas lights homes.","Petroleum creates waxes.","Oil stains mark workers.","Gas stations dot highways.","Petroleum’s scent is sharp.","Oil sands hold resources.","Fuel pumps serve millions.","Vaseline eases chafing.","Petroleum fuels invention."];
var selectedCityName = getProperty("CityDropdown", "options")[(getProperty("CityDropdown", "index"))];
var minimumPrice = getNumber("MinimumPrice");
var maximumPrice = getNumber("MaximumPrice");
// Variables (Unfiltered Lists):
var dateList = getColumn("US Gas Prices", "Date");
var priceAverageList = getColumn("US Gas Prices", "US Average");
var cityPriceList = getColumn("US Gas Prices", selectedCityName);
// Variables (Filtered Lists):
var dateFilteredList = [];
var priceAverageFilteredList = [];
var cityPriceFilteredList = [];
// Program:
initiationSequence();
// Event Triggered:
// Main Menu:
onEvent("GasPricesButton", "click", function( ) {
 setScreen("GasPricesScreen");
});
onEvent("PrivacyPolicyButton", "click", function( ) {
   setScreen("PrivacyPolicyScreen");
});
onEvent("TermsOfServiceButton", "click", function( ) {
    setScreen("TermsOfServiceScreen");
});
// Gas Prices:
onEvent("ExitGasPrices", "click", function( ) {
    setScreen("MainMenuScreen");
});
onEvent("OilUpButton","click", function( ) {
for (var i = 0; i < 100; i++) {
  setText("GasPricesDisplay", "On" + dateList[i] + "the average price of gas was" + priceAverageList[i] + "." + "\n");
}
});
onEvent("FilterGasPricesButton","click", function( ) {
  showElement("OilUpFilteredButton");
  showElement("YearDropdown");
  showElement("CityDropdown");
  showElement("PriceFilterInstructions");
  showElement("MinimumPrice");
  showElement("MaximumPrice");
});
onEvent("OilUpButtonFiltered","click", function( ) {
  // Filter the List
  filteringSystem();
  // Update the FilteredGasPricesDisplay element accordingly.
  updateFilteredText();
});
// Terms of Service:
onEvent("ExitTermsOfService", "click", function( ) {
  setScreen("MainMenuScreen");
});
// Privacy Policy:
onEvent("ExitPrivacyPolicy", "click", function( ) {
  setScreen("MainMenuScreen");
});
// Functions:
function initiationSequence() {
  // Set the screen to main menu. Make sure filters are hidden.
}
function filteringSystem() {
  // Reset Filtered List
  // Filter List
  // Date = Any Date Which Year in the range.
  // City Price = Any City Average Prices if Year Range & City Selected
  // Avg Price = Average Prices for Dates if only Year Range Selected
  // If Min or Max Entered
  // If Min then City Price & Avg Price = More Than 
  // If Max then City Price & Avg Price = Less Than
}
function updateFilteredText() {
  // If-Else-If Mumbo Jumbo Statements
  // If no selected City: setText("FilteredGasPricesDisplay", "On" + dateFilteredList[i] + "the average price of gas was" + priceAverageFilteredList[i] + "." + "\n");
  // If selected City: setText("FilteredGasPricesDisplay", "On" + dateFilteredList[i] + "the average price of gas was" + cityPriceFilteredList[i] + " in" + selectedCityName +"." + "\n");
}
