// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KubernetesClusterAttachment extends pulumi.CustomResource {
    /**
     * Get an existing KubernetesClusterAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KubernetesClusterAttachmentState, opts?: pulumi.CustomResourceOptions): KubernetesClusterAttachment {
        return new KubernetesClusterAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/kubernetesClusterAttachment:KubernetesClusterAttachment';

    /**
     * Returns true if the given object is an instance of KubernetesClusterAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KubernetesClusterAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KubernetesClusterAttachment.__pulumiType;
    }

    /**
     * ID of the cluster.
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * The host name of the attached instance. Dot (.) and dash (-) cannot be used as the first and last characters of HostName
     * and cannot be used consecutively. Windows example: The length of the name character is [2, 15], letters (capitalization
     * is not restricted), numbers and dashes (-) are allowed, dots (.) are not supported, and not all numbers are allowed.
     * Examples of other types (Linux, etc.): The character length is [2, 60], and multiple dots are allowed. There is a
     * segment between the dots. Each segment allows letters (with no limitation on capitalization), numbers and dashes (-).
     */
    public readonly hostname!: pulumi.Output<string | undefined>;
    /**
     * ID of Node image.
     */
    public readonly imageId!: pulumi.Output<string>;
    /**
     * ID of the CVM instance, this cvm will reinstall the system.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * The key pair to use for the instance, it looks like skey-16jig7tx, it should be set if `password` not set.
     */
    public readonly keyIds!: pulumi.Output<string[] | undefined>;
    /**
     * Labels of tke attachment exits CVM.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Password to access, should be set if `key_ids` not set.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * A list of security group IDs after attach to cluster.
     */
    public /*out*/ readonly securityGroups!: pulumi.Output<string[]>;
    /**
     * State of the node.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Sets whether the joining node participates in the schedule. Default is `0`, which means it participates in scheduling.
     * Non-zero(eg: `1`) number means it does not participate in scheduling.
     */
    public readonly unschedulable!: pulumi.Output<number | undefined>;
    /**
     * Deploy the machine configuration information of the 'WORKER', commonly used to attach existing instances.
     */
    public readonly workerConfig!: pulumi.Output<outputs.KubernetesClusterAttachmentWorkerConfig | undefined>;
    /**
     * Override variable worker_config, commonly used to attach existing instances.
     */
    public readonly workerConfigOverrides!: pulumi.Output<outputs.KubernetesClusterAttachmentWorkerConfigOverrides | undefined>;

    /**
     * Create a KubernetesClusterAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KubernetesClusterAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KubernetesClusterAttachmentArgs | KubernetesClusterAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KubernetesClusterAttachmentState | undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["imageId"] = state ? state.imageId : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["keyIds"] = state ? state.keyIds : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["securityGroups"] = state ? state.securityGroups : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["unschedulable"] = state ? state.unschedulable : undefined;
            resourceInputs["workerConfig"] = state ? state.workerConfig : undefined;
            resourceInputs["workerConfigOverrides"] = state ? state.workerConfigOverrides : undefined;
        } else {
            const args = argsOrState as KubernetesClusterAttachmentArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["imageId"] = args ? args.imageId : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["keyIds"] = args ? args.keyIds : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["unschedulable"] = args ? args.unschedulable : undefined;
            resourceInputs["workerConfig"] = args ? args.workerConfig : undefined;
            resourceInputs["workerConfigOverrides"] = args ? args.workerConfigOverrides : undefined;
            resourceInputs["securityGroups"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(KubernetesClusterAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KubernetesClusterAttachment resources.
 */
export interface KubernetesClusterAttachmentState {
    /**
     * ID of the cluster.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * The host name of the attached instance. Dot (.) and dash (-) cannot be used as the first and last characters of HostName
     * and cannot be used consecutively. Windows example: The length of the name character is [2, 15], letters (capitalization
     * is not restricted), numbers and dashes (-) are allowed, dots (.) are not supported, and not all numbers are allowed.
     * Examples of other types (Linux, etc.): The character length is [2, 60], and multiple dots are allowed. There is a
     * segment between the dots. Each segment allows letters (with no limitation on capitalization), numbers and dashes (-).
     */
    hostname?: pulumi.Input<string>;
    /**
     * ID of Node image.
     */
    imageId?: pulumi.Input<string>;
    /**
     * ID of the CVM instance, this cvm will reinstall the system.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * The key pair to use for the instance, it looks like skey-16jig7tx, it should be set if `password` not set.
     */
    keyIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Labels of tke attachment exits CVM.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Password to access, should be set if `key_ids` not set.
     */
    password?: pulumi.Input<string>;
    /**
     * A list of security group IDs after attach to cluster.
     */
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * State of the node.
     */
    state?: pulumi.Input<string>;
    /**
     * Sets whether the joining node participates in the schedule. Default is `0`, which means it participates in scheduling.
     * Non-zero(eg: `1`) number means it does not participate in scheduling.
     */
    unschedulable?: pulumi.Input<number>;
    /**
     * Deploy the machine configuration information of the 'WORKER', commonly used to attach existing instances.
     */
    workerConfig?: pulumi.Input<inputs.KubernetesClusterAttachmentWorkerConfig>;
    /**
     * Override variable worker_config, commonly used to attach existing instances.
     */
    workerConfigOverrides?: pulumi.Input<inputs.KubernetesClusterAttachmentWorkerConfigOverrides>;
}

/**
 * The set of arguments for constructing a KubernetesClusterAttachment resource.
 */
export interface KubernetesClusterAttachmentArgs {
    /**
     * ID of the cluster.
     */
    clusterId: pulumi.Input<string>;
    /**
     * The host name of the attached instance. Dot (.) and dash (-) cannot be used as the first and last characters of HostName
     * and cannot be used consecutively. Windows example: The length of the name character is [2, 15], letters (capitalization
     * is not restricted), numbers and dashes (-) are allowed, dots (.) are not supported, and not all numbers are allowed.
     * Examples of other types (Linux, etc.): The character length is [2, 60], and multiple dots are allowed. There is a
     * segment between the dots. Each segment allows letters (with no limitation on capitalization), numbers and dashes (-).
     */
    hostname?: pulumi.Input<string>;
    /**
     * ID of Node image.
     */
    imageId?: pulumi.Input<string>;
    /**
     * ID of the CVM instance, this cvm will reinstall the system.
     */
    instanceId: pulumi.Input<string>;
    /**
     * The key pair to use for the instance, it looks like skey-16jig7tx, it should be set if `password` not set.
     */
    keyIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Labels of tke attachment exits CVM.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Password to access, should be set if `key_ids` not set.
     */
    password?: pulumi.Input<string>;
    /**
     * Sets whether the joining node participates in the schedule. Default is `0`, which means it participates in scheduling.
     * Non-zero(eg: `1`) number means it does not participate in scheduling.
     */
    unschedulable?: pulumi.Input<number>;
    /**
     * Deploy the machine configuration information of the 'WORKER', commonly used to attach existing instances.
     */
    workerConfig?: pulumi.Input<inputs.KubernetesClusterAttachmentWorkerConfig>;
    /**
     * Override variable worker_config, commonly used to attach existing instances.
     */
    workerConfigOverrides?: pulumi.Input<inputs.KubernetesClusterAttachmentWorkerConfigOverrides>;
}
