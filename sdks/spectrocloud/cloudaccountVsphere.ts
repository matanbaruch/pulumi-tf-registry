// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudaccountVsphere extends pulumi.CustomResource {
    /**
     * Get an existing CloudaccountVsphere resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudaccountVsphereState, opts?: pulumi.CustomResourceOptions): CloudaccountVsphere {
        return new CloudaccountVsphere(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'spectrocloud:index/cloudaccountVsphere:CloudaccountVsphere';

    /**
     * Returns true if the given object is an instance of CloudaccountVsphere.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudaccountVsphere {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudaccountVsphere.__pulumiType;
    }

    public readonly context!: pulumi.Output<string | undefined>;
    /**
     * Name of the cloud account. This name is used to identify the cloud account in the Spectro Cloud UI.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * ID of the private cloud gateway. This is the ID of the private cloud gateway that is used to connect to the vSphere
     * cloud.
     */
    public readonly privateCloudGatewayId!: pulumi.Output<string>;
    /**
     * Ignore insecure error. This is a boolean value that indicates whether to ignore the insecure error or not. If not
     * specified, the default value is false.
     */
    public readonly vsphereIgnoreInsecureError!: pulumi.Output<boolean | undefined>;
    /**
     * Password of the vSphere cloud. This is the password of the vSphere cloud that is used to connect to the vSphere cloud.
     */
    public readonly vspherePassword!: pulumi.Output<string>;
    /**
     * Username of the vSphere cloud. This is the username of the vSphere cloud that is used to connect to the vSphere cloud.
     */
    public readonly vsphereUsername!: pulumi.Output<string>;
    /**
     * vCenter server address. This is the address of the vCenter server that is used to connect to the vSphere cloud.
     */
    public readonly vsphereVcenter!: pulumi.Output<string>;

    /**
     * Create a CloudaccountVsphere resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudaccountVsphereArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudaccountVsphereArgs | CloudaccountVsphereState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudaccountVsphereState | undefined;
            resourceInputs["context"] = state ? state.context : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateCloudGatewayId"] = state ? state.privateCloudGatewayId : undefined;
            resourceInputs["vsphereIgnoreInsecureError"] = state ? state.vsphereIgnoreInsecureError : undefined;
            resourceInputs["vspherePassword"] = state ? state.vspherePassword : undefined;
            resourceInputs["vsphereUsername"] = state ? state.vsphereUsername : undefined;
            resourceInputs["vsphereVcenter"] = state ? state.vsphereVcenter : undefined;
        } else {
            const args = argsOrState as CloudaccountVsphereArgs | undefined;
            if ((!args || args.privateCloudGatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudGatewayId'");
            }
            if ((!args || args.vspherePassword === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vspherePassword'");
            }
            if ((!args || args.vsphereUsername === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vsphereUsername'");
            }
            if ((!args || args.vsphereVcenter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vsphereVcenter'");
            }
            resourceInputs["context"] = args ? args.context : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateCloudGatewayId"] = args ? args.privateCloudGatewayId : undefined;
            resourceInputs["vsphereIgnoreInsecureError"] = args ? args.vsphereIgnoreInsecureError : undefined;
            resourceInputs["vspherePassword"] = args?.vspherePassword ? pulumi.secret(args.vspherePassword) : undefined;
            resourceInputs["vsphereUsername"] = args ? args.vsphereUsername : undefined;
            resourceInputs["vsphereVcenter"] = args ? args.vsphereVcenter : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["vspherePassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CloudaccountVsphere.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudaccountVsphere resources.
 */
export interface CloudaccountVsphereState {
    context?: pulumi.Input<string>;
    /**
     * Name of the cloud account. This name is used to identify the cloud account in the Spectro Cloud UI.
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the private cloud gateway. This is the ID of the private cloud gateway that is used to connect to the vSphere
     * cloud.
     */
    privateCloudGatewayId?: pulumi.Input<string>;
    /**
     * Ignore insecure error. This is a boolean value that indicates whether to ignore the insecure error or not. If not
     * specified, the default value is false.
     */
    vsphereIgnoreInsecureError?: pulumi.Input<boolean>;
    /**
     * Password of the vSphere cloud. This is the password of the vSphere cloud that is used to connect to the vSphere cloud.
     */
    vspherePassword?: pulumi.Input<string>;
    /**
     * Username of the vSphere cloud. This is the username of the vSphere cloud that is used to connect to the vSphere cloud.
     */
    vsphereUsername?: pulumi.Input<string>;
    /**
     * vCenter server address. This is the address of the vCenter server that is used to connect to the vSphere cloud.
     */
    vsphereVcenter?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudaccountVsphere resource.
 */
export interface CloudaccountVsphereArgs {
    context?: pulumi.Input<string>;
    /**
     * Name of the cloud account. This name is used to identify the cloud account in the Spectro Cloud UI.
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the private cloud gateway. This is the ID of the private cloud gateway that is used to connect to the vSphere
     * cloud.
     */
    privateCloudGatewayId: pulumi.Input<string>;
    /**
     * Ignore insecure error. This is a boolean value that indicates whether to ignore the insecure error or not. If not
     * specified, the default value is false.
     */
    vsphereIgnoreInsecureError?: pulumi.Input<boolean>;
    /**
     * Password of the vSphere cloud. This is the password of the vSphere cloud that is used to connect to the vSphere cloud.
     */
    vspherePassword: pulumi.Input<string>;
    /**
     * Username of the vSphere cloud. This is the username of the vSphere cloud that is used to connect to the vSphere cloud.
     */
    vsphereUsername: pulumi.Input<string>;
    /**
     * vCenter server address. This is the address of the vCenter server that is used to connect to the vSphere cloud.
     */
    vsphereVcenter: pulumi.Input<string>;
}
