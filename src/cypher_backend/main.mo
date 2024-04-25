import HashMap "mo:base/HashMap";
import Text "mo:base/Text";

actor EvidenceManagement {
  type Evidence = {
    hash : Text;
    description : Text;
    storageLocation : Text;
  };
  var evidenceTable : HashMap.HashMap<Text, Evidence> = HashMap.HashMap<Text, Evidence>(10, Text.equal, Text.hash);

  public func storeEvidence(hash : Text, description : Text, storageLocation : Text) : async () {
    let evidence : Evidence = { hash; description; storageLocation };
    evidenceTable.put(hash, evidence);
  };

  public func getRecord(hash : Text) : async ?Evidence {
    return evidenceTable.get(hash);
  };

  public func verify(fileHash : Text) : async Bool {
    switch (evidenceTable.get(fileHash)) {
      case (?_) { return true };
      case null { return false };
    };
  };
};