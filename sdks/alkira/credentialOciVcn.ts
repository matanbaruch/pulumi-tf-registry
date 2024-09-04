// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CredentialOciVcn extends pulumi.CustomResource {
    /**
     * Get an existing CredentialOciVcn resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CredentialOciVcnState, opts?: pulumi.CustomResourceOptions): CredentialOciVcn {
        return new CredentialOciVcn(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alkira:index/credentialOciVcn:CredentialOciVcn';

    /**
     * Returns true if the given object is an instance of CredentialOciVcn.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CredentialOciVcn {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CredentialOciVcn.__pulumiType;
    }

    /**
     * Fingerprint of the API key of the user.
     */
    public readonly fingerprint!: pulumi.Output<string>;
    /**
     * API key of the user.
     */
    public readonly key!: pulumi.Output<string>;
    /**
     * Name of the credential.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * OCID of the tenant.
     */
    public readonly tenantOcid!: pulumi.Output<string>;
    /**
     * OCID of the user.
     */
    public readonly userOcid!: pulumi.Output<string>;

    /**
     * Create a CredentialOciVcn resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CredentialOciVcnArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CredentialOciVcnArgs | CredentialOciVcnState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CredentialOciVcnState | undefined;
            resourceInputs["fingerprint"] = state ? state.fingerprint : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tenantOcid"] = state ? state.tenantOcid : undefined;
            resourceInputs["userOcid"] = state ? state.userOcid : undefined;
        } else {
            const args = argsOrState as CredentialOciVcnArgs | undefined;
            if ((!args || args.fingerprint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fingerprint'");
            }
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.tenantOcid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantOcid'");
            }
            if ((!args || args.userOcid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userOcid'");
            }
            resourceInputs["fingerprint"] = args ? args.fingerprint : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tenantOcid"] = args ? args.tenantOcid : undefined;
            resourceInputs["userOcid"] = args ? args.userOcid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CredentialOciVcn.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CredentialOciVcn resources.
 */
export interface CredentialOciVcnState {
    /**
     * Fingerprint of the API key of the user.
     */
    fingerprint?: pulumi.Input<string>;
    /**
     * API key of the user.
     */
    key?: pulumi.Input<string>;
    /**
     * Name of the credential.
     */
    name?: pulumi.Input<string>;
    /**
     * OCID of the tenant.
     */
    tenantOcid?: pulumi.Input<string>;
    /**
     * OCID of the user.
     */
    userOcid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CredentialOciVcn resource.
 */
export interface CredentialOciVcnArgs {
    /**
     * Fingerprint of the API key of the user.
     */
    fingerprint: pulumi.Input<string>;
    /**
     * API key of the user.
     */
    key: pulumi.Input<string>;
    /**
     * Name of the credential.
     */
    name?: pulumi.Input<string>;
    /**
     * OCID of the tenant.
     */
    tenantOcid: pulumi.Input<string>;
    /**
     * OCID of the user.
     */
    userOcid: pulumi.Input<string>;
}
