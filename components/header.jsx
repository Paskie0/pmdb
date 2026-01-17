import Search from "@/components/search";

export default function Header() {
    return (
        <header className="grid grid-flow-col grid-cols-[min-content_1fr_min-content] gap-4 items-center p-4">
            <span>PMDb</span>
                <Search />
                <div className="flex gap-2">
                    <span>User</span>
                    <span className="select-none">⋅</span>
                    <span>Menu</span>
                </div>
        </header>
    );
}