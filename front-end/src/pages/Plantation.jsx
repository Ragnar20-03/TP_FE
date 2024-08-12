/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zuyuzy70CbY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui_Plantation/card";
import BButton from "../components/BButton";

export default function Plantation() {
  let demo = false;
  const [plantations, setPlantations] = useState([{}]);

  useEffect(() => {}, []);

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 mt-28">
      <h1 className="text-2xl font-bold mb-6">My Plantations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Rainforest Restoration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">
                  Trees Planted
                </div>
                <div className="text-lg font-medium">250</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  Order Quantity
                </div>
                <div className="text-lg font-medium">300</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Place ID</div>
                <div className="text-lg font-medium">P-0123</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Planted By</div>
                <div className="text-lg font-medium">Acme NGO</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Status</div>
                <div className="text-lg font-medium text-green-500">
                  Completed
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Trees</div>
                <div className="text-lg font-medium">Oak, Maple, Pine</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">NGO ID</div>
                <div className="text-lg font-medium">N-456</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Campaign ID</div>
                <div className="text-lg font-medium">C-789</div>
              </div>

              {!demo && <BButton> Continue</BButton>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
