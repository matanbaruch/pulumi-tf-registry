// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VirtualDesktopHostPool extends pulumi.CustomResource {
    /**
     * Get an existing VirtualDesktopHostPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualDesktopHostPoolState, opts?: pulumi.CustomResourceOptions): VirtualDesktopHostPool {
        return new VirtualDesktopHostPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/virtualDesktopHostPool:VirtualDesktopHostPool';

    /**
     * Returns true if the given object is an instance of VirtualDesktopHostPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualDesktopHostPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualDesktopHostPool.__pulumiType;
    }

    public readonly customRdpProperties!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    public readonly loadBalancerType!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly maximumSessionsAllowed!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly personalDesktopAssignmentType!: pulumi.Output<string | undefined>;
    /**
     * Preferred App Group type to display
     */
    public readonly preferredAppGroupType!: pulumi.Output<string | undefined>;
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly scheduledAgentUpdates!: pulumi.Output<outputs.VirtualDesktopHostPoolScheduledAgentUpdates | undefined>;
    public readonly startVmOnConnect!: pulumi.Output<boolean | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.VirtualDesktopHostPoolTimeouts | undefined>;
    public readonly type!: pulumi.Output<string>;
    public readonly validateEnvironment!: pulumi.Output<boolean | undefined>;
    public readonly vmTemplate!: pulumi.Output<string | undefined>;

    /**
     * Create a VirtualDesktopHostPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualDesktopHostPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualDesktopHostPoolArgs | VirtualDesktopHostPoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VirtualDesktopHostPoolState | undefined;
            resourceInputs["customRdpProperties"] = state ? state.customRdpProperties : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["friendlyName"] = state ? state.friendlyName : undefined;
            resourceInputs["loadBalancerType"] = state ? state.loadBalancerType : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["maximumSessionsAllowed"] = state ? state.maximumSessionsAllowed : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["personalDesktopAssignmentType"] = state ? state.personalDesktopAssignmentType : undefined;
            resourceInputs["preferredAppGroupType"] = state ? state.preferredAppGroupType : undefined;
            resourceInputs["publicNetworkAccess"] = state ? state.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["scheduledAgentUpdates"] = state ? state.scheduledAgentUpdates : undefined;
            resourceInputs["startVmOnConnect"] = state ? state.startVmOnConnect : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["validateEnvironment"] = state ? state.validateEnvironment : undefined;
            resourceInputs["vmTemplate"] = state ? state.vmTemplate : undefined;
        } else {
            const args = argsOrState as VirtualDesktopHostPoolArgs | undefined;
            if ((!args || args.loadBalancerType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loadBalancerType'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["customRdpProperties"] = args ? args.customRdpProperties : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["loadBalancerType"] = args ? args.loadBalancerType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maximumSessionsAllowed"] = args ? args.maximumSessionsAllowed : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["personalDesktopAssignmentType"] = args ? args.personalDesktopAssignmentType : undefined;
            resourceInputs["preferredAppGroupType"] = args ? args.preferredAppGroupType : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scheduledAgentUpdates"] = args ? args.scheduledAgentUpdates : undefined;
            resourceInputs["startVmOnConnect"] = args ? args.startVmOnConnect : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["validateEnvironment"] = args ? args.validateEnvironment : undefined;
            resourceInputs["vmTemplate"] = args ? args.vmTemplate : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VirtualDesktopHostPool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VirtualDesktopHostPool resources.
 */
export interface VirtualDesktopHostPoolState {
    customRdpProperties?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    friendlyName?: pulumi.Input<string>;
    loadBalancerType?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    maximumSessionsAllowed?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    personalDesktopAssignmentType?: pulumi.Input<string>;
    /**
     * Preferred App Group type to display
     */
    preferredAppGroupType?: pulumi.Input<string>;
    publicNetworkAccess?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    scheduledAgentUpdates?: pulumi.Input<inputs.VirtualDesktopHostPoolScheduledAgentUpdates>;
    startVmOnConnect?: pulumi.Input<boolean>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.VirtualDesktopHostPoolTimeouts>;
    type?: pulumi.Input<string>;
    validateEnvironment?: pulumi.Input<boolean>;
    vmTemplate?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VirtualDesktopHostPool resource.
 */
export interface VirtualDesktopHostPoolArgs {
    customRdpProperties?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    friendlyName?: pulumi.Input<string>;
    loadBalancerType: pulumi.Input<string>;
    location: pulumi.Input<string>;
    maximumSessionsAllowed?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    personalDesktopAssignmentType?: pulumi.Input<string>;
    /**
     * Preferred App Group type to display
     */
    preferredAppGroupType?: pulumi.Input<string>;
    publicNetworkAccess?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    scheduledAgentUpdates?: pulumi.Input<inputs.VirtualDesktopHostPoolScheduledAgentUpdates>;
    startVmOnConnect?: pulumi.Input<boolean>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.VirtualDesktopHostPoolTimeouts>;
    type: pulumi.Input<string>;
    validateEnvironment?: pulumi.Input<boolean>;
    vmTemplate?: pulumi.Input<string>;
}
