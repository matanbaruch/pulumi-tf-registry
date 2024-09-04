// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NlbServerGroup extends pulumi.CustomResource {
    /**
     * Get an existing NlbServerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NlbServerGroupState, opts?: pulumi.CustomResourceOptions): NlbServerGroup {
        return new NlbServerGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/nlbServerGroup:NlbServerGroup';

    /**
     * Returns true if the given object is an instance of NlbServerGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NlbServerGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NlbServerGroup.__pulumiType;
    }

    public readonly addressIpVersion!: pulumi.Output<string>;
    public readonly anyPortEnabled!: pulumi.Output<boolean>;
    /**
     * @deprecated Deprecated
     */
    public readonly connectionDrain!: pulumi.Output<boolean>;
    public readonly connectionDrainEnabled!: pulumi.Output<boolean>;
    public readonly connectionDrainTimeout!: pulumi.Output<number>;
    public readonly healthCheck!: pulumi.Output<outputs.NlbServerGroupHealthCheck | undefined>;
    public readonly preserveClientIpEnabled!: pulumi.Output<boolean>;
    public readonly protocol!: pulumi.Output<string>;
    public readonly resourceGroupId!: pulumi.Output<string>;
    public readonly scheduler!: pulumi.Output<string>;
    public readonly serverGroupName!: pulumi.Output<string>;
    public readonly serverGroupType!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.NlbServerGroupTimeouts | undefined>;
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a NlbServerGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NlbServerGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NlbServerGroupArgs | NlbServerGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NlbServerGroupState | undefined;
            resourceInputs["addressIpVersion"] = state ? state.addressIpVersion : undefined;
            resourceInputs["anyPortEnabled"] = state ? state.anyPortEnabled : undefined;
            resourceInputs["connectionDrain"] = state ? state.connectionDrain : undefined;
            resourceInputs["connectionDrainEnabled"] = state ? state.connectionDrainEnabled : undefined;
            resourceInputs["connectionDrainTimeout"] = state ? state.connectionDrainTimeout : undefined;
            resourceInputs["healthCheck"] = state ? state.healthCheck : undefined;
            resourceInputs["preserveClientIpEnabled"] = state ? state.preserveClientIpEnabled : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["scheduler"] = state ? state.scheduler : undefined;
            resourceInputs["serverGroupName"] = state ? state.serverGroupName : undefined;
            resourceInputs["serverGroupType"] = state ? state.serverGroupType : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as NlbServerGroupArgs | undefined;
            if ((!args || args.serverGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverGroupName'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["addressIpVersion"] = args ? args.addressIpVersion : undefined;
            resourceInputs["anyPortEnabled"] = args ? args.anyPortEnabled : undefined;
            resourceInputs["connectionDrain"] = args ? args.connectionDrain : undefined;
            resourceInputs["connectionDrainEnabled"] = args ? args.connectionDrainEnabled : undefined;
            resourceInputs["connectionDrainTimeout"] = args ? args.connectionDrainTimeout : undefined;
            resourceInputs["healthCheck"] = args ? args.healthCheck : undefined;
            resourceInputs["preserveClientIpEnabled"] = args ? args.preserveClientIpEnabled : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["scheduler"] = args ? args.scheduler : undefined;
            resourceInputs["serverGroupName"] = args ? args.serverGroupName : undefined;
            resourceInputs["serverGroupType"] = args ? args.serverGroupType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NlbServerGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NlbServerGroup resources.
 */
export interface NlbServerGroupState {
    addressIpVersion?: pulumi.Input<string>;
    anyPortEnabled?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated
     */
    connectionDrain?: pulumi.Input<boolean>;
    connectionDrainEnabled?: pulumi.Input<boolean>;
    connectionDrainTimeout?: pulumi.Input<number>;
    healthCheck?: pulumi.Input<inputs.NlbServerGroupHealthCheck>;
    preserveClientIpEnabled?: pulumi.Input<boolean>;
    protocol?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    scheduler?: pulumi.Input<string>;
    serverGroupName?: pulumi.Input<string>;
    serverGroupType?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.NlbServerGroupTimeouts>;
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NlbServerGroup resource.
 */
export interface NlbServerGroupArgs {
    addressIpVersion?: pulumi.Input<string>;
    anyPortEnabled?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated
     */
    connectionDrain?: pulumi.Input<boolean>;
    connectionDrainEnabled?: pulumi.Input<boolean>;
    connectionDrainTimeout?: pulumi.Input<number>;
    healthCheck?: pulumi.Input<inputs.NlbServerGroupHealthCheck>;
    preserveClientIpEnabled?: pulumi.Input<boolean>;
    protocol?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    scheduler?: pulumi.Input<string>;
    serverGroupName: pulumi.Input<string>;
    serverGroupType?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.NlbServerGroupTimeouts>;
    vpcId: pulumi.Input<string>;
}
