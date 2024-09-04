// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DashboardsAllowlist extends pulumi.CustomResource {
    /**
     * Get an existing DashboardsAllowlist resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DashboardsAllowlistState, opts?: pulumi.CustomResourceOptions): DashboardsAllowlist {
        return new DashboardsAllowlist(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/dashboardsAllowlist:DashboardsAllowlist';

    /**
     * Returns true if the given object is an instance of DashboardsAllowlist.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DashboardsAllowlist {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DashboardsAllowlist.__pulumiType;
    }

    /**
     * List of URL pattern matchers
     */
    public readonly allowlist!: pulumi.Output<outputs.DashboardsAllowlistAllowlist | undefined>;

    /**
     * Create a DashboardsAllowlist resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DashboardsAllowlistArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DashboardsAllowlistArgs | DashboardsAllowlistState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DashboardsAllowlistState | undefined;
            resourceInputs["allowlist"] = state ? state.allowlist : undefined;
        } else {
            const args = argsOrState as DashboardsAllowlistArgs | undefined;
            resourceInputs["allowlist"] = args ? args.allowlist : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DashboardsAllowlist.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DashboardsAllowlist resources.
 */
export interface DashboardsAllowlistState {
    /**
     * List of URL pattern matchers
     */
    allowlist?: pulumi.Input<inputs.DashboardsAllowlistAllowlist>;
}

/**
 * The set of arguments for constructing a DashboardsAllowlist resource.
 */
export interface DashboardsAllowlistArgs {
    /**
     * List of URL pattern matchers
     */
    allowlist?: pulumi.Input<inputs.DashboardsAllowlistAllowlist>;
}
