// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CustomDomainVerification extends pulumi.CustomResource {
    /**
     * Get an existing CustomDomainVerification resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CustomDomainVerificationState, opts?: pulumi.CustomResourceOptions): CustomDomainVerification {
        return new CustomDomainVerification(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'auth0:index/customDomainVerification:CustomDomainVerification';

    /**
     * Returns true if the given object is an instance of CustomDomainVerification.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomDomainVerification {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomDomainVerification.__pulumiType;
    }

    public /*out*/ readonly cnameApiKey!: pulumi.Output<string>;
    /**
     * ID of the custom domain resource.
     */
    public readonly customDomainId!: pulumi.Output<string>;
    /**
     * The DNS name of the Auth0 origin server that handles traffic for the custom domain.
     */
    public /*out*/ readonly originDomainName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CustomDomainVerificationTimeouts | undefined>;

    /**
     * Create a CustomDomainVerification resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomDomainVerificationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CustomDomainVerificationArgs | CustomDomainVerificationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CustomDomainVerificationState | undefined;
            resourceInputs["cnameApiKey"] = state ? state.cnameApiKey : undefined;
            resourceInputs["customDomainId"] = state ? state.customDomainId : undefined;
            resourceInputs["originDomainName"] = state ? state.originDomainName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CustomDomainVerificationArgs | undefined;
            if ((!args || args.customDomainId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'customDomainId'");
            }
            resourceInputs["customDomainId"] = args ? args.customDomainId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["cnameApiKey"] = undefined /*out*/;
            resourceInputs["originDomainName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["cnameApiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CustomDomainVerification.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CustomDomainVerification resources.
 */
export interface CustomDomainVerificationState {
    cnameApiKey?: pulumi.Input<string>;
    /**
     * ID of the custom domain resource.
     */
    customDomainId?: pulumi.Input<string>;
    /**
     * The DNS name of the Auth0 origin server that handles traffic for the custom domain.
     */
    originDomainName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CustomDomainVerificationTimeouts>;
}

/**
 * The set of arguments for constructing a CustomDomainVerification resource.
 */
export interface CustomDomainVerificationArgs {
    /**
     * ID of the custom domain resource.
     */
    customDomainId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CustomDomainVerificationTimeouts>;
}
