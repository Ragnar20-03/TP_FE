/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zuyuzy70CbY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui_Plantation/card";

export default function Plantation() {
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
            </div>
          </CardContent>
        </Card>

        {/* <Card> */}
        {/* <CardHeader>
            <CardTitle>Urban Greening</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">
                  Trees Planted
                </div>
                <div className="text-lg font-medium">100</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  Order Quantity
                </div>
                <div className="text-lg font-medium">150</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Place ID</div>
                <div className="text-lg font-medium">P-4567</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Planted By</div>
                <div className="text-lg font-medium">City Parks Department</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Status</div>
                <div className="text-lg font-medium text-yellow-500">
                  In Progress
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Trees</div>
                <div className="text-lg font-medium">
                  Birch, Cherry, Dogwood
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">NGO ID</div>
                <div className="text-lg font-medium">-</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Campaign ID</div>
                <div className="text-lg font-medium">C-2345</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        
        <Card> */}
        {/* <CardHeader>
            <CardTitle>Coastal Restoration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">
                  Trees Planted
                </div>
                <div className="text-lg font-medium">75</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  Order Quantity
                </div>
                <div className="text-lg font-medium">100</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Place ID</div>
                <div className="text-lg font-medium">P-8901</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Planted By</div>
                <div className="text-lg font-medium">
                  Ocean Conservation NGO
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Status</div>
                <div className="text-lg font-medium text-red-500">Delayed</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Trees</div>
                <div className="text-lg font-medium">
                  Mangrove, Coconut, Casuarina
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">NGO ID</div>
                <div className="text-lg font-medium">N-789</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Campaign ID</div>
                <div className="text-lg font-medium">C-4567</div>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
}
