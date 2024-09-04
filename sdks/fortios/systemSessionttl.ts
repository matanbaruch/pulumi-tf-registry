// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemSessionttl extends pulumi.CustomResource {
    /**
     * Get an existing SystemSessionttl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemSessionttlState, opts?: pulumi.CustomResourceOptions): SystemSessionttl {
        return new SystemSessionttl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/systemSessionttl:SystemSessionttl';

    /**
     * Returns true if the given object is an instance of SystemSessionttl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemSessionttl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemSessionttl.__pulumiType;
    }

    public readonly default!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly getAllTables!: pulumi.Output<string | undefined>;
    public readonly ports!: pulumi.Output<outputs.SystemSessionttlPort[] | undefined>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a SystemSessionttl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemSessionttlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemSessionttlArgs | SystemSessionttlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemSessionttlState | undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["getAllTables"] = state ? state.getAllTables : undefined;
            resourceInputs["ports"] = state ? state.ports : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as SystemSessionttlArgs | undefined;
            resourceInputs["default"] = args ? args.default : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["getAllTables"] = args ? args.getAllTables : undefined;
            resourceInputs["ports"] = args ? args.ports : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemSessionttl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemSessionttl resources.
 */
export interface SystemSessionttlState {
    default?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    ports?: pulumi.Input<pulumi.Input<inputs.SystemSessionttlPort>[]>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemSessionttl resource.
 */
export interface SystemSessionttlArgs {
    default?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    ports?: pulumi.Input<pulumi.Input<inputs.SystemSessionttlPort>[]>;
    vdomparam?: pulumi.Input<string>;
}
