// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServicecatalogPortfolioShare extends pulumi.CustomResource {
    /**
     * Get an existing ServicecatalogPortfolioShare resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServicecatalogPortfolioShareState, opts?: pulumi.CustomResourceOptions): ServicecatalogPortfolioShare {
        return new ServicecatalogPortfolioShare(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/servicecatalogPortfolioShare:ServicecatalogPortfolioShare';

    /**
     * Returns true if the given object is an instance of ServicecatalogPortfolioShare.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServicecatalogPortfolioShare {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServicecatalogPortfolioShare.__pulumiType;
    }

    public readonly acceptLanguage!: pulumi.Output<string | undefined>;
    public /*out*/ readonly accepted!: pulumi.Output<boolean>;
    public readonly portfolioId!: pulumi.Output<string>;
    public readonly principalId!: pulumi.Output<string>;
    public readonly sharePrincipals!: pulumi.Output<boolean | undefined>;
    public readonly shareTagOptions!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ServicecatalogPortfolioShareTimeouts | undefined>;
    public readonly type!: pulumi.Output<string>;
    public readonly waitForAcceptance!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ServicecatalogPortfolioShare resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServicecatalogPortfolioShareArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServicecatalogPortfolioShareArgs | ServicecatalogPortfolioShareState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServicecatalogPortfolioShareState | undefined;
            resourceInputs["acceptLanguage"] = state ? state.acceptLanguage : undefined;
            resourceInputs["accepted"] = state ? state.accepted : undefined;
            resourceInputs["portfolioId"] = state ? state.portfolioId : undefined;
            resourceInputs["principalId"] = state ? state.principalId : undefined;
            resourceInputs["sharePrincipals"] = state ? state.sharePrincipals : undefined;
            resourceInputs["shareTagOptions"] = state ? state.shareTagOptions : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["waitForAcceptance"] = state ? state.waitForAcceptance : undefined;
        } else {
            const args = argsOrState as ServicecatalogPortfolioShareArgs | undefined;
            if ((!args || args.portfolioId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portfolioId'");
            }
            if ((!args || args.principalId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principalId'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["acceptLanguage"] = args ? args.acceptLanguage : undefined;
            resourceInputs["portfolioId"] = args ? args.portfolioId : undefined;
            resourceInputs["principalId"] = args ? args.principalId : undefined;
            resourceInputs["sharePrincipals"] = args ? args.sharePrincipals : undefined;
            resourceInputs["shareTagOptions"] = args ? args.shareTagOptions : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["waitForAcceptance"] = args ? args.waitForAcceptance : undefined;
            resourceInputs["accepted"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServicecatalogPortfolioShare.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServicecatalogPortfolioShare resources.
 */
export interface ServicecatalogPortfolioShareState {
    acceptLanguage?: pulumi.Input<string>;
    accepted?: pulumi.Input<boolean>;
    portfolioId?: pulumi.Input<string>;
    principalId?: pulumi.Input<string>;
    sharePrincipals?: pulumi.Input<boolean>;
    shareTagOptions?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.ServicecatalogPortfolioShareTimeouts>;
    type?: pulumi.Input<string>;
    waitForAcceptance?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ServicecatalogPortfolioShare resource.
 */
export interface ServicecatalogPortfolioShareArgs {
    acceptLanguage?: pulumi.Input<string>;
    portfolioId: pulumi.Input<string>;
    principalId: pulumi.Input<string>;
    sharePrincipals?: pulumi.Input<boolean>;
    shareTagOptions?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.ServicecatalogPortfolioShareTimeouts>;
    type: pulumi.Input<string>;
    waitForAcceptance?: pulumi.Input<boolean>;
}
