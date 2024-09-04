// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ContainerInstancesContainerInstance extends pulumi.CustomResource {
    /**
     * Get an existing ContainerInstancesContainerInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerInstancesContainerInstanceState, opts?: pulumi.CustomResourceOptions): ContainerInstancesContainerInstance {
        return new ContainerInstancesContainerInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/containerInstancesContainerInstance:ContainerInstancesContainerInstance';

    /**
     * Returns true if the given object is an instance of ContainerInstancesContainerInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerInstancesContainerInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerInstancesContainerInstance.__pulumiType;
    }

    public readonly availabilityDomain!: pulumi.Output<string>;
    public readonly compartmentId!: pulumi.Output<string>;
    public /*out*/ readonly containerCount!: pulumi.Output<number>;
    public readonly containerRestartPolicy!: pulumi.Output<string>;
    public readonly containers!: pulumi.Output<outputs.ContainerInstancesContainerInstanceContainer[]>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly dnsConfig!: pulumi.Output<outputs.ContainerInstancesContainerInstanceDnsConfig | undefined>;
    public readonly faultDomain!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly gracefulShutdownTimeoutInSeconds!: pulumi.Output<string>;
    public readonly imagePullSecrets!: pulumi.Output<outputs.ContainerInstancesContainerInstanceImagePullSecret[] | undefined>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly shape!: pulumi.Output<string>;
    public readonly shapeConfig!: pulumi.Output<outputs.ContainerInstancesContainerInstanceShapeConfig>;
    public readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ContainerInstancesContainerInstanceTimeouts | undefined>;
    public readonly vnics!: pulumi.Output<outputs.ContainerInstancesContainerInstanceVnic[]>;
    public /*out*/ readonly volumeCount!: pulumi.Output<number>;
    public readonly volumes!: pulumi.Output<outputs.ContainerInstancesContainerInstanceVolume[] | undefined>;

    /**
     * Create a ContainerInstancesContainerInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerInstancesContainerInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContainerInstancesContainerInstanceArgs | ContainerInstancesContainerInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContainerInstancesContainerInstanceState | undefined;
            resourceInputs["availabilityDomain"] = state ? state.availabilityDomain : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["containerCount"] = state ? state.containerCount : undefined;
            resourceInputs["containerRestartPolicy"] = state ? state.containerRestartPolicy : undefined;
            resourceInputs["containers"] = state ? state.containers : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["dnsConfig"] = state ? state.dnsConfig : undefined;
            resourceInputs["faultDomain"] = state ? state.faultDomain : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["gracefulShutdownTimeoutInSeconds"] = state ? state.gracefulShutdownTimeoutInSeconds : undefined;
            resourceInputs["imagePullSecrets"] = state ? state.imagePullSecrets : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["shape"] = state ? state.shape : undefined;
            resourceInputs["shapeConfig"] = state ? state.shapeConfig : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vnics"] = state ? state.vnics : undefined;
            resourceInputs["volumeCount"] = state ? state.volumeCount : undefined;
            resourceInputs["volumes"] = state ? state.volumes : undefined;
        } else {
            const args = argsOrState as ContainerInstancesContainerInstanceArgs | undefined;
            if ((!args || args.availabilityDomain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityDomain'");
            }
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.containers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containers'");
            }
            if ((!args || args.shape === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shape'");
            }
            if ((!args || args.shapeConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shapeConfig'");
            }
            if ((!args || args.vnics === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vnics'");
            }
            resourceInputs["availabilityDomain"] = args ? args.availabilityDomain : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["containerRestartPolicy"] = args ? args.containerRestartPolicy : undefined;
            resourceInputs["containers"] = args ? args.containers : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["dnsConfig"] = args ? args.dnsConfig : undefined;
            resourceInputs["faultDomain"] = args ? args.faultDomain : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["gracefulShutdownTimeoutInSeconds"] = args ? args.gracefulShutdownTimeoutInSeconds : undefined;
            resourceInputs["imagePullSecrets"] = args ? args.imagePullSecrets : undefined;
            resourceInputs["shape"] = args ? args.shape : undefined;
            resourceInputs["shapeConfig"] = args ? args.shapeConfig : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vnics"] = args ? args.vnics : undefined;
            resourceInputs["volumes"] = args ? args.volumes : undefined;
            resourceInputs["containerCount"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
            resourceInputs["volumeCount"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ContainerInstancesContainerInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ContainerInstancesContainerInstance resources.
 */
export interface ContainerInstancesContainerInstanceState {
    availabilityDomain?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    containerCount?: pulumi.Input<number>;
    containerRestartPolicy?: pulumi.Input<string>;
    containers?: pulumi.Input<pulumi.Input<inputs.ContainerInstancesContainerInstanceContainer>[]>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    dnsConfig?: pulumi.Input<inputs.ContainerInstancesContainerInstanceDnsConfig>;
    faultDomain?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    gracefulShutdownTimeoutInSeconds?: pulumi.Input<string>;
    imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.ContainerInstancesContainerInstanceImagePullSecret>[]>;
    lifecycleDetails?: pulumi.Input<string>;
    shape?: pulumi.Input<string>;
    shapeConfig?: pulumi.Input<inputs.ContainerInstancesContainerInstanceShapeConfig>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ContainerInstancesContainerInstanceTimeouts>;
    vnics?: pulumi.Input<pulumi.Input<inputs.ContainerInstancesContainerInstanceVnic>[]>;
    volumeCount?: pulumi.Input<number>;
    volumes?: pulumi.Input<pulumi.Input<inputs.ContainerInstancesContainerInstanceVolume>[]>;
}

/**
 * The set of arguments for constructing a ContainerInstancesContainerInstance resource.
 */
export interface ContainerInstancesContainerInstanceArgs {
    availabilityDomain: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    containerRestartPolicy?: pulumi.Input<string>;
    containers: pulumi.Input<pulumi.Input<inputs.ContainerInstancesContainerInstanceContainer>[]>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    dnsConfig?: pulumi.Input<inputs.ContainerInstancesContainerInstanceDnsConfig>;
    faultDomain?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    gracefulShutdownTimeoutInSeconds?: pulumi.Input<string>;
    imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.ContainerInstancesContainerInstanceImagePullSecret>[]>;
    shape: pulumi.Input<string>;
    shapeConfig: pulumi.Input<inputs.ContainerInstancesContainerInstanceShapeConfig>;
    state?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ContainerInstancesContainerInstanceTimeouts>;
    vnics: pulumi.Input<pulumi.Input<inputs.ContainerInstancesContainerInstanceVnic>[]>;
    volumes?: pulumi.Input<pulumi.Input<inputs.ContainerInstancesContainerInstanceVolume>[]>;
}
