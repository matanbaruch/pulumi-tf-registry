// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Grouping extends pulumi.CustomResource {
    /**
     * Get an existing Grouping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupingState, opts?: pulumi.CustomResourceOptions): Grouping {
        return new Grouping(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prosimo:index/grouping:Grouping';

    /**
     * Returns true if the given object is an instance of Grouping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Grouping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Grouping.__pulumiType;
    }

    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    public readonly details!: pulumi.Output<outputs.GroupingDetail[]>;
    public readonly members!: pulumi.Output<string[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly subType!: pulumi.Output<string | undefined>;
    /**
     * Grouping type, e.g: USER, APP, DEVICE, TIME, IP_RANGE, GEO
     */
    public readonly type!: pulumi.Output<string>;
    public /*out*/ readonly updatedTime!: pulumi.Output<string>;

    /**
     * Create a Grouping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroupingArgs | GroupingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GroupingState | undefined;
            resourceInputs["createdTime"] = state ? state.createdTime : undefined;
            resourceInputs["details"] = state ? state.details : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["subType"] = state ? state.subType : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["updatedTime"] = state ? state.updatedTime : undefined;
        } else {
            const args = argsOrState as GroupingArgs | undefined;
            if ((!args || args.details === undefined) && !opts.urn) {
                throw new Error("Missing required property 'details'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["details"] = args ? args.details : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["subType"] = args ? args.subType : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["updatedTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Grouping.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Grouping resources.
 */
export interface GroupingState {
    createdTime?: pulumi.Input<string>;
    details?: pulumi.Input<pulumi.Input<inputs.GroupingDetail>[]>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    subType?: pulumi.Input<string>;
    /**
     * Grouping type, e.g: USER, APP, DEVICE, TIME, IP_RANGE, GEO
     */
    type?: pulumi.Input<string>;
    updatedTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Grouping resource.
 */
export interface GroupingArgs {
    details: pulumi.Input<pulumi.Input<inputs.GroupingDetail>[]>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    subType?: pulumi.Input<string>;
    /**
     * Grouping type, e.g: USER, APP, DEVICE, TIME, IP_RANGE, GEO
     */
    type: pulumi.Input<string>;
}
