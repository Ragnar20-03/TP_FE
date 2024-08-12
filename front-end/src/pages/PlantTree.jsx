import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "../components/ui_Plantation/card";
import { CardContent } from "../components/ui_Plantation/card";
import BButton from "../components/BButton";
import { Navigate, useNavigate } from "react-router-dom";

function PlantTree() {
  const [locations, setLocations] = useState();

  useEffect(() => {
    console.log("Hii inside Plant Tree");
  }, []);
  const navigate = useNavigate();
  return (
    <div className="mt-12">
      <div className="container mx-auto py-8 px-4 md:px-6 mt-28">
        <h1 className="text-2xl font-bold mb-6">Available Locations !</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Gangapur Road Nashik</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Reserved</div>
                  <div className="text-lg font-medium">Yes</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Place ID</div>
                  <div className="text-lg font-medium">P-0123</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Planted By
                  </div>
                  <div className="text-lg font-medium">Acme NGO</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Status</div>
                  <div className="text-lg font-medium text-green-500">
                    Green
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Trees</div>
                  <div className="text-lg font-medium">Oak, Maple, Pine</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Place ID</div>
                  <div className="text-lg font-medium">N-456</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Plantation ID
                  </div>
                  <div className="text-lg font-medium">C-789</div>
                </div>
                <BButton
                  onClick={() => {
                    alert("plantaition initialted !");
                    navigate("/plantation");
                    window.location.reload();
                  }}
                >
                  Select Location
                </BButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default PlantTree;
