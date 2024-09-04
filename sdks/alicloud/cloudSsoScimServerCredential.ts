// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudSsoScimServerCredential extends pulumi.CustomResource {
    /**
     * Get an existing CloudSsoScimServerCredential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudSsoScimServerCredentialState, opts?: pulumi.CustomResourceOptions): CloudSsoScimServerCredential {
        return new CloudSsoScimServerCredential(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/cloudSsoScimServerCredential:CloudSsoScimServerCredential';

    /**
     * Returns true if the given object is an instance of CloudSsoScimServerCredential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudSsoScimServerCredential {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudSsoScimServerCredential.__pulumiType;
    }

    public /*out*/ readonly credentialId!: pulumi.Output<string>;
    public readonly directoryId!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a CloudSsoScimServerCredential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudSsoScimServerCredentialArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudSsoScimServerCredentialArgs | CloudSsoScimServerCredentialState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudSsoScimServerCredentialState | undefined;
            resourceInputs["credentialId"] = state ? state.credentialId : undefined;
            resourceInputs["directoryId"] = state ? state.directoryId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as CloudSsoScimServerCredentialArgs | undefined;
            if ((!args || args.directoryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'directoryId'");
            }
            resourceInputs["directoryId"] = args ? args.directoryId : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["credentialId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudSsoScimServerCredential.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudSsoScimServerCredential resources.
 */
export interface CloudSsoScimServerCredentialState {
    credentialId?: pulumi.Input<string>;
    directoryId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudSsoScimServerCredential resource.
 */
export interface CloudSsoScimServerCredentialArgs {
    directoryId: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
