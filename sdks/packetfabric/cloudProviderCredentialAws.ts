// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudProviderCredentialAws extends pulumi.CustomResource {
    /**
     * Get an existing CloudProviderCredentialAws resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudProviderCredentialAwsState, opts?: pulumi.CustomResourceOptions): CloudProviderCredentialAws {
        return new CloudProviderCredentialAws(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'packetfabric:index/cloudProviderCredentialAws:CloudProviderCredentialAws';

    /**
     * Returns true if the given object is an instance of CloudProviderCredentialAws.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudProviderCredentialAws {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudProviderCredentialAws.__pulumiType;
    }

    /**
     * The AWS access key you want to save. Can also be set with the AWS_ACCESS_KEY_ID environment variable.
     */
    public readonly awsAccessKey!: pulumi.Output<string>;
    /**
     * The AWS secret key you want to save. Can also be set with the AWS_SECRET_ACCESS_KEY environment variable.
     */
    public readonly awsSecretKey!: pulumi.Output<string>;
    /**
     * Description of the Cloud Provider Credentials.
     */
    public readonly description!: pulumi.Output<string>;

    /**
     * Create a CloudProviderCredentialAws resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudProviderCredentialAwsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudProviderCredentialAwsArgs | CloudProviderCredentialAwsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudProviderCredentialAwsState | undefined;
            resourceInputs["awsAccessKey"] = state ? state.awsAccessKey : undefined;
            resourceInputs["awsSecretKey"] = state ? state.awsSecretKey : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
        } else {
            const args = argsOrState as CloudProviderCredentialAwsArgs | undefined;
            if ((!args || args.awsAccessKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'awsAccessKey'");
            }
            if ((!args || args.awsSecretKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'awsSecretKey'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            resourceInputs["awsAccessKey"] = args?.awsAccessKey ? pulumi.secret(args.awsAccessKey) : undefined;
            resourceInputs["awsSecretKey"] = args?.awsSecretKey ? pulumi.secret(args.awsSecretKey) : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["awsAccessKey", "awsSecretKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CloudProviderCredentialAws.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudProviderCredentialAws resources.
 */
export interface CloudProviderCredentialAwsState {
    /**
     * The AWS access key you want to save. Can also be set with the AWS_ACCESS_KEY_ID environment variable.
     */
    awsAccessKey?: pulumi.Input<string>;
    /**
     * The AWS secret key you want to save. Can also be set with the AWS_SECRET_ACCESS_KEY environment variable.
     */
    awsSecretKey?: pulumi.Input<string>;
    /**
     * Description of the Cloud Provider Credentials.
     */
    description?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudProviderCredentialAws resource.
 */
export interface CloudProviderCredentialAwsArgs {
    /**
     * The AWS access key you want to save. Can also be set with the AWS_ACCESS_KEY_ID environment variable.
     */
    awsAccessKey: pulumi.Input<string>;
    /**
     * The AWS secret key you want to save. Can also be set with the AWS_SECRET_ACCESS_KEY environment variable.
     */
    awsSecretKey: pulumi.Input<string>;
    /**
     * Description of the Cloud Provider Credentials.
     */
    description: pulumi.Input<string>;
}
