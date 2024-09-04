// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FirewallInternetservicedefinition extends pulumi.CustomResource {
    /**
     * Get an existing FirewallInternetservicedefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallInternetservicedefinitionState, opts?: pulumi.CustomResourceOptions): FirewallInternetservicedefinition {
        return new FirewallInternetservicedefinition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/firewallInternetservicedefinition:FirewallInternetservicedefinition';

    /**
     * Returns true if the given object is an instance of FirewallInternetservicedefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallInternetservicedefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallInternetservicedefinition.__pulumiType;
    }

    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly entries!: pulumi.Output<outputs.FirewallInternetservicedefinitionEntry[] | undefined>;
    public readonly fosid!: pulumi.Output<number>;
    public readonly getAllTables!: pulumi.Output<string | undefined>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a FirewallInternetservicedefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FirewallInternetservicedefinitionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallInternetservicedefinitionArgs | FirewallInternetservicedefinitionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallInternetservicedefinitionState | undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["entries"] = state ? state.entries : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["getAllTables"] = state ? state.getAllTables : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as FirewallInternetservicedefinitionArgs | undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["entries"] = args ? args.entries : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["getAllTables"] = args ? args.getAllTables : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallInternetservicedefinition.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallInternetservicedefinition resources.
 */
export interface FirewallInternetservicedefinitionState {
    dynamicSortSubtable?: pulumi.Input<string>;
    entries?: pulumi.Input<pulumi.Input<inputs.FirewallInternetservicedefinitionEntry>[]>;
    fosid?: pulumi.Input<number>;
    getAllTables?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallInternetservicedefinition resource.
 */
export interface FirewallInternetservicedefinitionArgs {
    dynamicSortSubtable?: pulumi.Input<string>;
    entries?: pulumi.Input<pulumi.Input<inputs.FirewallInternetservicedefinitionEntry>[]>;
    fosid?: pulumi.Input<number>;
    getAllTables?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
