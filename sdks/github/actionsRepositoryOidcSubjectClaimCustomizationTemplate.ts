// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ActionsRepositoryOidcSubjectClaimCustomizationTemplate extends pulumi.CustomResource {
    /**
     * Get an existing ActionsRepositoryOidcSubjectClaimCustomizationTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActionsRepositoryOidcSubjectClaimCustomizationTemplateState, opts?: pulumi.CustomResourceOptions): ActionsRepositoryOidcSubjectClaimCustomizationTemplate {
        return new ActionsRepositoryOidcSubjectClaimCustomizationTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'github:index/actionsRepositoryOidcSubjectClaimCustomizationTemplate:ActionsRepositoryOidcSubjectClaimCustomizationTemplate';

    /**
     * Returns true if the given object is an instance of ActionsRepositoryOidcSubjectClaimCustomizationTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActionsRepositoryOidcSubjectClaimCustomizationTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ActionsRepositoryOidcSubjectClaimCustomizationTemplate.__pulumiType;
    }

    /**
     * A list of OpenID Connect claims.
     */
    public readonly includeClaimKeys!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the repository.
     */
    public readonly repository!: pulumi.Output<string>;
    /**
     * Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set.
     */
    public readonly useDefault!: pulumi.Output<boolean>;

    /**
     * Create a ActionsRepositoryOidcSubjectClaimCustomizationTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActionsRepositoryOidcSubjectClaimCustomizationTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ActionsRepositoryOidcSubjectClaimCustomizationTemplateArgs | ActionsRepositoryOidcSubjectClaimCustomizationTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ActionsRepositoryOidcSubjectClaimCustomizationTemplateState | undefined;
            resourceInputs["includeClaimKeys"] = state ? state.includeClaimKeys : undefined;
            resourceInputs["repository"] = state ? state.repository : undefined;
            resourceInputs["useDefault"] = state ? state.useDefault : undefined;
        } else {
            const args = argsOrState as ActionsRepositoryOidcSubjectClaimCustomizationTemplateArgs | undefined;
            if ((!args || args.repository === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repository'");
            }
            if ((!args || args.useDefault === undefined) && !opts.urn) {
                throw new Error("Missing required property 'useDefault'");
            }
            resourceInputs["includeClaimKeys"] = args ? args.includeClaimKeys : undefined;
            resourceInputs["repository"] = args ? args.repository : undefined;
            resourceInputs["useDefault"] = args ? args.useDefault : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ActionsRepositoryOidcSubjectClaimCustomizationTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ActionsRepositoryOidcSubjectClaimCustomizationTemplate resources.
 */
export interface ActionsRepositoryOidcSubjectClaimCustomizationTemplateState {
    /**
     * A list of OpenID Connect claims.
     */
    includeClaimKeys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the repository.
     */
    repository?: pulumi.Input<string>;
    /**
     * Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set.
     */
    useDefault?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ActionsRepositoryOidcSubjectClaimCustomizationTemplate resource.
 */
export interface ActionsRepositoryOidcSubjectClaimCustomizationTemplateArgs {
    /**
     * A list of OpenID Connect claims.
     */
    includeClaimKeys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the repository.
     */
    repository: pulumi.Input<string>;
    /**
     * Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set.
     */
    useDefault: pulumi.Input<boolean>;
}
