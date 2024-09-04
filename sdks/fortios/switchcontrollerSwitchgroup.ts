// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SwitchcontrollerSwitchgroup extends pulumi.CustomResource {
    /**
     * Get an existing SwitchcontrollerSwitchgroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SwitchcontrollerSwitchgroupState, opts?: pulumi.CustomResourceOptions): SwitchcontrollerSwitchgroup {
        return new SwitchcontrollerSwitchgroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/switchcontrollerSwitchgroup:SwitchcontrollerSwitchgroup';

    /**
     * Returns true if the given object is an instance of SwitchcontrollerSwitchgroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SwitchcontrollerSwitchgroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SwitchcontrollerSwitchgroup.__pulumiType;
    }

    public readonly description!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly fortilink!: pulumi.Output<string>;
    public readonly getAllTables!: pulumi.Output<string | undefined>;
    public readonly members!: pulumi.Output<outputs.SwitchcontrollerSwitchgroupMember[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a SwitchcontrollerSwitchgroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SwitchcontrollerSwitchgroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SwitchcontrollerSwitchgroupArgs | SwitchcontrollerSwitchgroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SwitchcontrollerSwitchgroupState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["fortilink"] = state ? state.fortilink : undefined;
            resourceInputs["getAllTables"] = state ? state.getAllTables : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as SwitchcontrollerSwitchgroupArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["fortilink"] = args ? args.fortilink : undefined;
            resourceInputs["getAllTables"] = args ? args.getAllTables : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SwitchcontrollerSwitchgroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SwitchcontrollerSwitchgroup resources.
 */
export interface SwitchcontrollerSwitchgroupState {
    description?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fortilink?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<inputs.SwitchcontrollerSwitchgroupMember>[]>;
    name?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SwitchcontrollerSwitchgroup resource.
 */
export interface SwitchcontrollerSwitchgroupArgs {
    description?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fortilink?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<inputs.SwitchcontrollerSwitchgroupMember>[]>;
    name?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
