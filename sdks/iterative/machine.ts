// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Machine extends pulumi.CustomResource {
    /**
     * Get an existing Machine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MachineState, opts?: pulumi.CustomResourceOptions): Machine {
        return new Machine(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iterative:index/machine:Machine';

    /**
     * Returns true if the given object is an instance of Machine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Machine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Machine.__pulumiType;
    }

    public readonly awsSecurityGroup!: pulumi.Output<string | undefined>;
    public readonly awsSubnetId!: pulumi.Output<string | undefined>;
    public readonly cloud!: pulumi.Output<string | undefined>;
    public readonly image!: pulumi.Output<string | undefined>;
    public readonly instanceGpu!: pulumi.Output<string | undefined>;
    public readonly instanceHddSize!: pulumi.Output<number | undefined>;
    public /*out*/ readonly instanceIp!: pulumi.Output<string>;
    public /*out*/ readonly instanceLaunchTime!: pulumi.Output<string>;
    public readonly instancePermissionSet!: pulumi.Output<string | undefined>;
    public readonly instanceType!: pulumi.Output<string | undefined>;
    public readonly kubernetesNodeSelector!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string | undefined>;
    public readonly spot!: pulumi.Output<boolean | undefined>;
    public readonly spotPrice!: pulumi.Output<number | undefined>;
    public /*out*/ readonly sshName!: pulumi.Output<string>;
    public readonly sshPrivate!: pulumi.Output<string | undefined>;
    public /*out*/ readonly sshPublic!: pulumi.Output<string>;
    public readonly startupScript!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.MachineTimeouts | undefined>;

    /**
     * Create a Machine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: MachineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MachineArgs | MachineState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MachineState | undefined;
            resourceInputs["awsSecurityGroup"] = state ? state.awsSecurityGroup : undefined;
            resourceInputs["awsSubnetId"] = state ? state.awsSubnetId : undefined;
            resourceInputs["cloud"] = state ? state.cloud : undefined;
            resourceInputs["image"] = state ? state.image : undefined;
            resourceInputs["instanceGpu"] = state ? state.instanceGpu : undefined;
            resourceInputs["instanceHddSize"] = state ? state.instanceHddSize : undefined;
            resourceInputs["instanceIp"] = state ? state.instanceIp : undefined;
            resourceInputs["instanceLaunchTime"] = state ? state.instanceLaunchTime : undefined;
            resourceInputs["instancePermissionSet"] = state ? state.instancePermissionSet : undefined;
            resourceInputs["instanceType"] = state ? state.instanceType : undefined;
            resourceInputs["kubernetesNodeSelector"] = state ? state.kubernetesNodeSelector : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["spot"] = state ? state.spot : undefined;
            resourceInputs["spotPrice"] = state ? state.spotPrice : undefined;
            resourceInputs["sshName"] = state ? state.sshName : undefined;
            resourceInputs["sshPrivate"] = state ? state.sshPrivate : undefined;
            resourceInputs["sshPublic"] = state ? state.sshPublic : undefined;
            resourceInputs["startupScript"] = state ? state.startupScript : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as MachineArgs | undefined;
            resourceInputs["awsSecurityGroup"] = args ? args.awsSecurityGroup : undefined;
            resourceInputs["awsSubnetId"] = args ? args.awsSubnetId : undefined;
            resourceInputs["cloud"] = args ? args.cloud : undefined;
            resourceInputs["image"] = args ? args.image : undefined;
            resourceInputs["instanceGpu"] = args ? args.instanceGpu : undefined;
            resourceInputs["instanceHddSize"] = args ? args.instanceHddSize : undefined;
            resourceInputs["instancePermissionSet"] = args ? args.instancePermissionSet : undefined;
            resourceInputs["instanceType"] = args ? args.instanceType : undefined;
            resourceInputs["kubernetesNodeSelector"] = args ? args.kubernetesNodeSelector : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["spot"] = args ? args.spot : undefined;
            resourceInputs["spotPrice"] = args ? args.spotPrice : undefined;
            resourceInputs["sshPrivate"] = args?.sshPrivate ? pulumi.secret(args.sshPrivate) : undefined;
            resourceInputs["startupScript"] = args?.startupScript ? pulumi.secret(args.startupScript) : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["instanceIp"] = undefined /*out*/;
            resourceInputs["instanceLaunchTime"] = undefined /*out*/;
            resourceInputs["sshName"] = undefined /*out*/;
            resourceInputs["sshPublic"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["sshPrivate", "startupScript"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Machine.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Machine resources.
 */
export interface MachineState {
    awsSecurityGroup?: pulumi.Input<string>;
    awsSubnetId?: pulumi.Input<string>;
    cloud?: pulumi.Input<string>;
    image?: pulumi.Input<string>;
    instanceGpu?: pulumi.Input<string>;
    instanceHddSize?: pulumi.Input<number>;
    instanceIp?: pulumi.Input<string>;
    instanceLaunchTime?: pulumi.Input<string>;
    instancePermissionSet?: pulumi.Input<string>;
    instanceType?: pulumi.Input<string>;
    kubernetesNodeSelector?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    spot?: pulumi.Input<boolean>;
    spotPrice?: pulumi.Input<number>;
    sshName?: pulumi.Input<string>;
    sshPrivate?: pulumi.Input<string>;
    sshPublic?: pulumi.Input<string>;
    startupScript?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MachineTimeouts>;
}

/**
 * The set of arguments for constructing a Machine resource.
 */
export interface MachineArgs {
    awsSecurityGroup?: pulumi.Input<string>;
    awsSubnetId?: pulumi.Input<string>;
    cloud?: pulumi.Input<string>;
    image?: pulumi.Input<string>;
    instanceGpu?: pulumi.Input<string>;
    instanceHddSize?: pulumi.Input<number>;
    instancePermissionSet?: pulumi.Input<string>;
    instanceType?: pulumi.Input<string>;
    kubernetesNodeSelector?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    spot?: pulumi.Input<boolean>;
    spotPrice?: pulumi.Input<number>;
    sshPrivate?: pulumi.Input<string>;
    startupScript?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MachineTimeouts>;
}
