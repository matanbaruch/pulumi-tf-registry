// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Hostgroup extends pulumi.CustomResource {
    /**
     * Get an existing Hostgroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HostgroupState, opts?: pulumi.CustomResourceOptions): Hostgroup {
        return new Hostgroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'powermax:index/hostgroup:Hostgroup';

    /**
     * Returns true if the given object is an instance of Hostgroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Hostgroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Hostgroup.__pulumiType;
    }

    /**
     * It enables the rejection of any masking operation involving this hostgroup that would result in inconsistent LUN values.
     * (Update Supported)
     */
    public readonly consistentLun!: pulumi.Output<boolean>;
    /**
     * Host Flags set for the hostgroup. When host_flags = {} or not set then default flags will be considered. (Update
     * Supported)
     */
    public readonly hostFlags!: pulumi.Output<outputs.HostgroupHostFlags>;
    /**
     * A list of host ids associated with the hostgroup. (Update Supported)
     */
    public readonly hostIds!: pulumi.Output<string[]>;
    /**
     * The masking views associated with the hostgroup.
     */
    public /*out*/ readonly maskingviews!: pulumi.Output<string[]>;
    /**
     * The name of the hostgroup. Only alphanumeric characters, underscores ( _ ), and hyphens (-) are allowed. (Update
     * Supported)
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The number of hosts associated with the hostgroup.
     */
    public /*out*/ readonly numofhosts!: pulumi.Output<number>;
    /**
     * The number of initiators associated with the hostgroup.
     */
    public /*out*/ readonly numofinitiators!: pulumi.Output<number>;
    /**
     * The number of masking views associated with the hostgroup.
     */
    public /*out*/ readonly numofmaskingviews!: pulumi.Output<number>;
    /**
     * States whether port flags override is enabled on the hostgroup.
     */
    public /*out*/ readonly portFlagsOverride!: pulumi.Output<boolean>;
    /**
     * Specifies the type of hostgroup.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Hostgroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HostgroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HostgroupArgs | HostgroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HostgroupState | undefined;
            resourceInputs["consistentLun"] = state ? state.consistentLun : undefined;
            resourceInputs["hostFlags"] = state ? state.hostFlags : undefined;
            resourceInputs["hostIds"] = state ? state.hostIds : undefined;
            resourceInputs["maskingviews"] = state ? state.maskingviews : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["numofhosts"] = state ? state.numofhosts : undefined;
            resourceInputs["numofinitiators"] = state ? state.numofinitiators : undefined;
            resourceInputs["numofmaskingviews"] = state ? state.numofmaskingviews : undefined;
            resourceInputs["portFlagsOverride"] = state ? state.portFlagsOverride : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as HostgroupArgs | undefined;
            if ((!args || args.hostIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostIds'");
            }
            resourceInputs["consistentLun"] = args ? args.consistentLun : undefined;
            resourceInputs["hostFlags"] = args ? args.hostFlags : undefined;
            resourceInputs["hostIds"] = args ? args.hostIds : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["maskingviews"] = undefined /*out*/;
            resourceInputs["numofhosts"] = undefined /*out*/;
            resourceInputs["numofinitiators"] = undefined /*out*/;
            resourceInputs["numofmaskingviews"] = undefined /*out*/;
            resourceInputs["portFlagsOverride"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Hostgroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Hostgroup resources.
 */
export interface HostgroupState {
    /**
     * It enables the rejection of any masking operation involving this hostgroup that would result in inconsistent LUN values.
     * (Update Supported)
     */
    consistentLun?: pulumi.Input<boolean>;
    /**
     * Host Flags set for the hostgroup. When host_flags = {} or not set then default flags will be considered. (Update
     * Supported)
     */
    hostFlags?: pulumi.Input<inputs.HostgroupHostFlags>;
    /**
     * A list of host ids associated with the hostgroup. (Update Supported)
     */
    hostIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The masking views associated with the hostgroup.
     */
    maskingviews?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the hostgroup. Only alphanumeric characters, underscores ( _ ), and hyphens (-) are allowed. (Update
     * Supported)
     */
    name?: pulumi.Input<string>;
    /**
     * The number of hosts associated with the hostgroup.
     */
    numofhosts?: pulumi.Input<number>;
    /**
     * The number of initiators associated with the hostgroup.
     */
    numofinitiators?: pulumi.Input<number>;
    /**
     * The number of masking views associated with the hostgroup.
     */
    numofmaskingviews?: pulumi.Input<number>;
    /**
     * States whether port flags override is enabled on the hostgroup.
     */
    portFlagsOverride?: pulumi.Input<boolean>;
    /**
     * Specifies the type of hostgroup.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Hostgroup resource.
 */
export interface HostgroupArgs {
    /**
     * It enables the rejection of any masking operation involving this hostgroup that would result in inconsistent LUN values.
     * (Update Supported)
     */
    consistentLun?: pulumi.Input<boolean>;
    /**
     * Host Flags set for the hostgroup. When host_flags = {} or not set then default flags will be considered. (Update
     * Supported)
     */
    hostFlags?: pulumi.Input<inputs.HostgroupHostFlags>;
    /**
     * A list of host ids associated with the hostgroup. (Update Supported)
     */
    hostIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the hostgroup. Only alphanumeric characters, underscores ( _ ), and hyphens (-) are allowed. (Update
     * Supported)
     */
    name?: pulumi.Input<string>;
}
