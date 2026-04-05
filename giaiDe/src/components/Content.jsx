
import { memo } from "react";

function Content() {

    console.log('Re-render');
    return (
        <div>

            This is the paragrap
        </div>
    )
}

export default memo(Content)