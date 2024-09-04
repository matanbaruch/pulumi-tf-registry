// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AwsHypervisor extends pulumi.CustomResource {
    /**
     * Get an existing AwsHypervisor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AwsHypervisorState, opts?: pulumi.CustomResourceOptions): AwsHypervisor {
        return new AwsHypervisor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrix:index/awsHypervisor:AwsHypervisor';

    /**
     * Returns true if the given object is an instance of AwsHypervisor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AwsHypervisor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AwsHypervisor.__pulumiType;
    }

    /**
     * The API key used to authenticate with the AWS APIs.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * Name of the hypervisor.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * AWS region to connect to.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The IDs of the scopes for the hypervisor to be a part of.
     */
    public readonly scopes!: pulumi.Output<string[]>;
    /**
     * The secret key used to authenticate with the AWS APIs.
     */
    public readonly secretKey!: pulumi.Output<string>;
    /**
     * Id of the zone the hypervisor is associated with.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a AwsHypervisor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AwsHypervisorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AwsHypervisorArgs | AwsHypervisorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AwsHypervisorState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["scopes"] = state ? state.scopes : undefined;
            resourceInputs["secretKey"] = state ? state.secretKey : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as AwsHypervisorArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            if ((!args || args.secretKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'secretKey'");
            }
            if ((!args || args.zone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zone'");
            }
            resourceInputs["apiKey"] = args ? args.apiKey : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["secretKey"] = args?.secretKey ? pulumi.secret(args.secretKey) : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["secretKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(AwsHypervisor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AwsHypervisor resources.
 */
export interface AwsHypervisorState {
    /**
     * The API key used to authenticate with the AWS APIs.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Name of the hypervisor.
     */
    name?: pulumi.Input<string>;
    /**
     * AWS region to connect to.
     */
    region?: pulumi.Input<string>;
    /**
     * The IDs of the scopes for the hypervisor to be a part of.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The secret key used to authenticate with the AWS APIs.
     */
    secretKey?: pulumi.Input<string>;
    /**
     * Id of the zone the hypervisor is associated with.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AwsHypervisor resource.
 */
export interface AwsHypervisorArgs {
    /**
     * The API key used to authenticate with the AWS APIs.
     */
    apiKey: pulumi.Input<string>;
    /**
     * Name of the hypervisor.
     */
    name?: pulumi.Input<string>;
    /**
     * AWS region to connect to.
     */
    region: pulumi.Input<string>;
    /**
     * The IDs of the scopes for the hypervisor to be a part of.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The secret key used to authenticate with the AWS APIs.
     */
    secretKey: pulumi.Input<string>;
    /**
     * Id of the zone the hypervisor is associated with.
     */
    zone: pulumi.Input<string>;
}
