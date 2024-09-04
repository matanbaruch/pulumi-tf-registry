// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudaccountCustom extends pulumi.CustomResource {
    /**
     * Get an existing CloudaccountCustom resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudaccountCustomState, opts?: pulumi.CustomResourceOptions): CloudaccountCustom {
        return new CloudaccountCustom(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'spectrocloud:index/cloudaccountCustom:CloudaccountCustom';

    /**
     * Returns true if the given object is an instance of CloudaccountCustom.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudaccountCustom {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudaccountCustom.__pulumiType;
    }

    /**
     * The cloud provider name.
     */
    public readonly cloud!: pulumi.Output<string>;
    public readonly context!: pulumi.Output<string | undefined>;
    /**
     * The credentials required for accessing the cloud.
     */
    public readonly credentials!: pulumi.Output<{[key: string]: string}>;
    /**
     * The name of the cloud account.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * ID of the private cloud gateway, which serves as the connection point to establish connectivity with the cloud
     * infrastructure.
     */
    public readonly privateCloudGatewayId!: pulumi.Output<string>;

    /**
     * Create a CloudaccountCustom resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudaccountCustomArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudaccountCustomArgs | CloudaccountCustomState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudaccountCustomState | undefined;
            resourceInputs["cloud"] = state ? state.cloud : undefined;
            resourceInputs["context"] = state ? state.context : undefined;
            resourceInputs["credentials"] = state ? state.credentials : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateCloudGatewayId"] = state ? state.privateCloudGatewayId : undefined;
        } else {
            const args = argsOrState as CloudaccountCustomArgs | undefined;
            if ((!args || args.cloud === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloud'");
            }
            if ((!args || args.credentials === undefined) && !opts.urn) {
                throw new Error("Missing required property 'credentials'");
            }
            if ((!args || args.privateCloudGatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudGatewayId'");
            }
            resourceInputs["cloud"] = args ? args.cloud : undefined;
            resourceInputs["context"] = args ? args.context : undefined;
            resourceInputs["credentials"] = args?.credentials ? pulumi.secret(args.credentials) : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateCloudGatewayId"] = args ? args.privateCloudGatewayId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["credentials"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CloudaccountCustom.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudaccountCustom resources.
 */
export interface CloudaccountCustomState {
    /**
     * The cloud provider name.
     */
    cloud?: pulumi.Input<string>;
    context?: pulumi.Input<string>;
    /**
     * The credentials required for accessing the cloud.
     */
    credentials?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the cloud account.
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the private cloud gateway, which serves as the connection point to establish connectivity with the cloud
     * infrastructure.
     */
    privateCloudGatewayId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudaccountCustom resource.
 */
export interface CloudaccountCustomArgs {
    /**
     * The cloud provider name.
     */
    cloud: pulumi.Input<string>;
    context?: pulumi.Input<string>;
    /**
     * The credentials required for accessing the cloud.
     */
    credentials: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the cloud account.
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the private cloud gateway, which serves as the connection point to establish connectivity with the cloud
     * infrastructure.
     */
    privateCloudGatewayId: pulumi.Input<string>;
}
