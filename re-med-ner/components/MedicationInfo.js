export default async function returnDrugDetails(drugName) {
    const url = `https://api.fda.gov/drug/label.json?search=openfda.generic_name:${drugName}`;
    const response = await fetch(url, {method: "GET"});
    const drugNameData = await response.json();
    
    giveDrugData(drugNameData.results[0]);
} 
  
function minifyData(drugInfo) {
    let sentences = drugInfo.split(".");
    return sentences > 4 ? sentences.slice(0,4).join(".") : drugInfo;
}

async function giveDrugData(drug) {
    let name, dosage, storage, stopUse, warnings, takeWith, drugData;

    try{
        (!drug.openfda.generic_name[0].toLowerCase()) ? "N/A" : name = minifyData(drug.openfda.generic_name[0].toLowerCase()); 
        (!drug.dosage_and_administration[0]) ? "N/A" : dosage = minifyData(drug.dosage_and_administration[0]); 
        (!drug.storage_and_handling[0]) ? "N/A" : storage = minifyData(drug.storage_and_handling[0]); 
        (!drug.stop_use[0]) ? "N/A" : stopUse = minifyData(drug.stop_use[0]); 
        (!drug.warnings[0]) ? "N/A" : warnings = minifyData(drug.warnings[0]); 
        (!drug.when_using[0]) ? "N/A" : takeWith = minifyData(drug.when_using[0]); 
    }
    catch(e){
        console.log(e)
    }

    drugData = {
        name, 
        dosage,
        storage,
        stopUse,
        warnings,
        takeWith
    }

    /*
    Find if the drug impairs the patient
    Find if the drug can be mixed with others
    */

} 