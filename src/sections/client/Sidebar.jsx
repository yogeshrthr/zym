import { Link, useLocation } from "react-router-dom";

const menu = [
  { name: "Dashboard",    desc: "Main View",               icon: "🏠", path: "/dashboard" },
  { name: "My Schedule",  desc: "Booked Classes",          icon: "📅", path: "/schedule"  },
  { name: "Workouts",     desc: "PDF/Video Plans",         icon: "🏋️", path: "/workouts"  },
  { name: "Diet Plans",   desc: "Nutrition Guides",        icon: "🥗", path: "/diet"      },
  { name: "Payments",     desc: "Invoices & Stripe",       icon: "💳", path: "/payments"  },
  { name: "Settings",     desc: "Profile & Notifications", icon: "⚙️", path: "/settings"  },
];

function Sidebar({ collapsed, onCollapse }) {
  const location = useLocation();

  return (
    <div
      className={`af-sidebar d-flex flex-column flex-shrink-0 ${collapsed ? "af-sidebar--collapsed" : ""}`}
    >
      {/* Header */}
      <div className="d-flex align-items-center px-3 py-3 af-sidebar__header">
        {!collapsed && <span className="af-sidebar-logo me-auto">AF</span>}
        <button
          className={`af-toggle-btn ${collapsed ? "mx-auto" : "ms-auto"}`}
          onClick={() => onCollapse(!collapsed)}
        >
          {collapsed
            ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          }
        </button>
      </div>

      {/* Nav items */}
      <ul className="list-unstyled px-2 py-2 mb-0 flex-grow-1">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.name} className="mb-1">
              <Link
                to={item.path}
                className={`af-nav-link ${isActive ? "active" : ""}`}
                title={collapsed ? item.name : ""}
              >
                <span className="af-nav-icon">{item.icon}</span>
                {!collapsed && (
                  <>
                    <span className="d-flex flex-column overflow-hidden">
                      <span className="af-nav-name">{item.name}</span>
                      <span className="af-nav-desc">{item.desc}</span>
                    </span>
                    {isActive && <span className="af-active-dot" />}
                  </>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Footer */}
      {!collapsed && (
        <div className="af-sidebar-footer">
          <div className="d-flex align-items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=11"
              alt="member"
              className="af-member-avatar"
            />
            <div>
              <div className="small fw-semibold text-white">John D.</div>
              <div className="af-member-plan">Elite Member</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;