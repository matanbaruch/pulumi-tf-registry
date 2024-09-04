// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ConfidentialLedger extends pulumi.CustomResource {
    /**
     * Get an existing ConfidentialLedger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConfidentialLedgerState, opts?: pulumi.CustomResourceOptions): ConfidentialLedger {
        return new ConfidentialLedger(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/confidentialLedger:ConfidentialLedger';

    /**
     * Returns true if the given object is an instance of ConfidentialLedger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConfidentialLedger {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConfidentialLedger.__pulumiType;
    }

    public readonly azureadBasedServicePrincipals!: pulumi.Output<outputs.ConfidentialLedgerAzureadBasedServicePrincipal[]>;
    public readonly certificateBasedSecurityPrincipals!: pulumi.Output<outputs.ConfidentialLedgerCertificateBasedSecurityPrincipal[] | undefined>;
    public /*out*/ readonly identityServiceEndpoint!: pulumi.Output<string>;
    public /*out*/ readonly ledgerEndpoint!: pulumi.Output<string>;
    public readonly ledgerType!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ConfidentialLedgerTimeouts | undefined>;

    /**
     * Create a ConfidentialLedger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfidentialLedgerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConfidentialLedgerArgs | ConfidentialLedgerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConfidentialLedgerState | undefined;
            resourceInputs["azureadBasedServicePrincipals"] = state ? state.azureadBasedServicePrincipals : undefined;
            resourceInputs["certificateBasedSecurityPrincipals"] = state ? state.certificateBasedSecurityPrincipals : undefined;
            resourceInputs["identityServiceEndpoint"] = state ? state.identityServiceEndpoint : undefined;
            resourceInputs["ledgerEndpoint"] = state ? state.ledgerEndpoint : undefined;
            resourceInputs["ledgerType"] = state ? state.ledgerType : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ConfidentialLedgerArgs | undefined;
            if ((!args || args.azureadBasedServicePrincipals === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azureadBasedServicePrincipals'");
            }
            if ((!args || args.ledgerType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ledgerType'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["azureadBasedServicePrincipals"] = args ? args.azureadBasedServicePrincipals : undefined;
            resourceInputs["certificateBasedSecurityPrincipals"] = args ? args.certificateBasedSecurityPrincipals : undefined;
            resourceInputs["ledgerType"] = args ? args.ledgerType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["identityServiceEndpoint"] = undefined /*out*/;
            resourceInputs["ledgerEndpoint"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ConfidentialLedger.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ConfidentialLedger resources.
 */
export interface ConfidentialLedgerState {
    azureadBasedServicePrincipals?: pulumi.Input<pulumi.Input<inputs.ConfidentialLedgerAzureadBasedServicePrincipal>[]>;
    certificateBasedSecurityPrincipals?: pulumi.Input<pulumi.Input<inputs.ConfidentialLedgerCertificateBasedSecurityPrincipal>[]>;
    identityServiceEndpoint?: pulumi.Input<string>;
    ledgerEndpoint?: pulumi.Input<string>;
    ledgerType?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ConfidentialLedgerTimeouts>;
}

/**
 * The set of arguments for constructing a ConfidentialLedger resource.
 */
export interface ConfidentialLedgerArgs {
    azureadBasedServicePrincipals: pulumi.Input<pulumi.Input<inputs.ConfidentialLedgerAzureadBasedServicePrincipal>[]>;
    certificateBasedSecurityPrincipals?: pulumi.Input<pulumi.Input<inputs.ConfidentialLedgerCertificateBasedSecurityPrincipal>[]>;
    ledgerType: pulumi.Input<string>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ConfidentialLedgerTimeouts>;
}
