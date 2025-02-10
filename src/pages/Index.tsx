import ThreatCard from "@/components/Dashboard/ThreatCard";
import ThreatMap from "@/components/Dashboard/ThreatMap";
import AlertsFeed from "@/components/Dashboard/AlertsFeed";
import ThreatPrediction from "@/components/Dashboard/ThreatPrediction";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0E17] text-[#F8F9FA] p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Security Operations Center
          </h1>
          <p className="text-foreground/60">
            Real-time threat monitoring and incident response
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ThreatCard
            title="Active Threats"
            count={12}
            severity="critical"
            trend="up"
          />
          <ThreatCard
            title="Blocked Attacks"
            count={847}
            severity="low"
            trend="down"
          />
          <ThreatCard
            title="System Health"
            count={98}
            severity="low"
            trend="stable"
          />
          <ThreatCard
            title="Network Anomalies"
            count={3}
            severity="medium"
            trend="up"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ThreatMap />
          </div>
          <div className="space-y-6">
            <ThreatPrediction />
            <AlertsFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;