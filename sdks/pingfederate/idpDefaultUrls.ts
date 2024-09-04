// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IdpDefaultUrls extends pulumi.CustomResource {
    /**
     * Get an existing IdpDefaultUrls resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdpDefaultUrlsState, opts?: pulumi.CustomResourceOptions): IdpDefaultUrls {
        return new IdpDefaultUrls(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingfederate:index/idpDefaultUrls:IdpDefaultUrls';

    /**
     * Returns true if the given object is an instance of IdpDefaultUrls.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdpDefaultUrls {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdpDefaultUrls.__pulumiType;
    }

    /**
     * Prompt user to confirm Single Logout (SLO). The default value is `false`.
     */
    public readonly confirmIdpSlo!: pulumi.Output<boolean>;
    /**
     * Provide the error text displayed in a user's browser when an SSO operation fails.
     */
    public readonly idpErrorMsg!: pulumi.Output<string>;
    /**
     * Provide the default URL you would like to send the user to when Single Logout has succeeded.
     */
    public readonly idpSloSuccessUrl!: pulumi.Output<string | undefined>;

    /**
     * Create a IdpDefaultUrls resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdpDefaultUrlsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdpDefaultUrlsArgs | IdpDefaultUrlsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdpDefaultUrlsState | undefined;
            resourceInputs["confirmIdpSlo"] = state ? state.confirmIdpSlo : undefined;
            resourceInputs["idpErrorMsg"] = state ? state.idpErrorMsg : undefined;
            resourceInputs["idpSloSuccessUrl"] = state ? state.idpSloSuccessUrl : undefined;
        } else {
            const args = argsOrState as IdpDefaultUrlsArgs | undefined;
            if ((!args || args.idpErrorMsg === undefined) && !opts.urn) {
                throw new Error("Missing required property 'idpErrorMsg'");
            }
            resourceInputs["confirmIdpSlo"] = args ? args.confirmIdpSlo : undefined;
            resourceInputs["idpErrorMsg"] = args ? args.idpErrorMsg : undefined;
            resourceInputs["idpSloSuccessUrl"] = args ? args.idpSloSuccessUrl : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdpDefaultUrls.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdpDefaultUrls resources.
 */
export interface IdpDefaultUrlsState {
    /**
     * Prompt user to confirm Single Logout (SLO). The default value is `false`.
     */
    confirmIdpSlo?: pulumi.Input<boolean>;
    /**
     * Provide the error text displayed in a user's browser when an SSO operation fails.
     */
    idpErrorMsg?: pulumi.Input<string>;
    /**
     * Provide the default URL you would like to send the user to when Single Logout has succeeded.
     */
    idpSloSuccessUrl?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IdpDefaultUrls resource.
 */
export interface IdpDefaultUrlsArgs {
    /**
     * Prompt user to confirm Single Logout (SLO). The default value is `false`.
     */
    confirmIdpSlo?: pulumi.Input<boolean>;
    /**
     * Provide the error text displayed in a user's browser when an SSO operation fails.
     */
    idpErrorMsg: pulumi.Input<string>;
    /**
     * Provide the default URL you would like to send the user to when Single Logout has succeeded.
     */
    idpSloSuccessUrl?: pulumi.Input<string>;
}
