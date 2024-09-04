// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MnqSnsCredentials extends pulumi.CustomResource {
    /**
     * Get an existing MnqSnsCredentials resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MnqSnsCredentialsState, opts?: pulumi.CustomResourceOptions): MnqSnsCredentials {
        return new MnqSnsCredentials(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/mnqSnsCredentials:MnqSnsCredentials';

    /**
     * Returns true if the given object is an instance of MnqSnsCredentials.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MnqSnsCredentials {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MnqSnsCredentials.__pulumiType;
    }

    /**
     * SNS credentials access key
     */
    public /*out*/ readonly accessKey!: pulumi.Output<string>;
    /**
     * The credentials name
     */
    public readonly name!: pulumi.Output<string>;
    public readonly permissions!: pulumi.Output<outputs.MnqSnsCredentialsPermissions | undefined>;
    /**
     * The project_id you want to attach the resource to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The region you want to attach the resource to
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * SNS credentials secret key
     */
    public /*out*/ readonly secretKey!: pulumi.Output<string>;

    /**
     * Create a MnqSnsCredentials resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: MnqSnsCredentialsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MnqSnsCredentialsArgs | MnqSnsCredentialsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MnqSnsCredentialsState | undefined;
            resourceInputs["accessKey"] = state ? state.accessKey : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["secretKey"] = state ? state.secretKey : undefined;
        } else {
            const args = argsOrState as MnqSnsCredentialsArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["accessKey"] = undefined /*out*/;
            resourceInputs["secretKey"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessKey", "secretKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(MnqSnsCredentials.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MnqSnsCredentials resources.
 */
export interface MnqSnsCredentialsState {
    /**
     * SNS credentials access key
     */
    accessKey?: pulumi.Input<string>;
    /**
     * The credentials name
     */
    name?: pulumi.Input<string>;
    permissions?: pulumi.Input<inputs.MnqSnsCredentialsPermissions>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The region you want to attach the resource to
     */
    region?: pulumi.Input<string>;
    /**
     * SNS credentials secret key
     */
    secretKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MnqSnsCredentials resource.
 */
export interface MnqSnsCredentialsArgs {
    /**
     * The credentials name
     */
    name?: pulumi.Input<string>;
    permissions?: pulumi.Input<inputs.MnqSnsCredentialsPermissions>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The region you want to attach the resource to
     */
    region?: pulumi.Input<string>;
}
