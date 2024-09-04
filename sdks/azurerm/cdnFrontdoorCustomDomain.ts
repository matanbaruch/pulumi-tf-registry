// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CdnFrontdoorCustomDomain extends pulumi.CustomResource {
    /**
     * Get an existing CdnFrontdoorCustomDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CdnFrontdoorCustomDomainState, opts?: pulumi.CustomResourceOptions): CdnFrontdoorCustomDomain {
        return new CdnFrontdoorCustomDomain(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/cdnFrontdoorCustomDomain:CdnFrontdoorCustomDomain';

    /**
     * Returns true if the given object is an instance of CdnFrontdoorCustomDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CdnFrontdoorCustomDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CdnFrontdoorCustomDomain.__pulumiType;
    }

    public readonly cdnFrontdoorProfileId!: pulumi.Output<string>;
    public readonly dnsZoneId!: pulumi.Output<string | undefined>;
    public /*out*/ readonly expirationDate!: pulumi.Output<string>;
    public readonly hostName!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CdnFrontdoorCustomDomainTimeouts | undefined>;
    public readonly tls!: pulumi.Output<outputs.CdnFrontdoorCustomDomainTls>;
    public /*out*/ readonly validationToken!: pulumi.Output<string>;

    /**
     * Create a CdnFrontdoorCustomDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CdnFrontdoorCustomDomainArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CdnFrontdoorCustomDomainArgs | CdnFrontdoorCustomDomainState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CdnFrontdoorCustomDomainState | undefined;
            resourceInputs["cdnFrontdoorProfileId"] = state ? state.cdnFrontdoorProfileId : undefined;
            resourceInputs["dnsZoneId"] = state ? state.dnsZoneId : undefined;
            resourceInputs["expirationDate"] = state ? state.expirationDate : undefined;
            resourceInputs["hostName"] = state ? state.hostName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["tls"] = state ? state.tls : undefined;
            resourceInputs["validationToken"] = state ? state.validationToken : undefined;
        } else {
            const args = argsOrState as CdnFrontdoorCustomDomainArgs | undefined;
            if ((!args || args.cdnFrontdoorProfileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cdnFrontdoorProfileId'");
            }
            if ((!args || args.hostName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostName'");
            }
            if ((!args || args.tls === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tls'");
            }
            resourceInputs["cdnFrontdoorProfileId"] = args ? args.cdnFrontdoorProfileId : undefined;
            resourceInputs["dnsZoneId"] = args ? args.dnsZoneId : undefined;
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["tls"] = args ? args.tls : undefined;
            resourceInputs["expirationDate"] = undefined /*out*/;
            resourceInputs["validationToken"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CdnFrontdoorCustomDomain.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CdnFrontdoorCustomDomain resources.
 */
export interface CdnFrontdoorCustomDomainState {
    cdnFrontdoorProfileId?: pulumi.Input<string>;
    dnsZoneId?: pulumi.Input<string>;
    expirationDate?: pulumi.Input<string>;
    hostName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CdnFrontdoorCustomDomainTimeouts>;
    tls?: pulumi.Input<inputs.CdnFrontdoorCustomDomainTls>;
    validationToken?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CdnFrontdoorCustomDomain resource.
 */
export interface CdnFrontdoorCustomDomainArgs {
    cdnFrontdoorProfileId: pulumi.Input<string>;
    dnsZoneId?: pulumi.Input<string>;
    hostName: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CdnFrontdoorCustomDomainTimeouts>;
    tls: pulumi.Input<inputs.CdnFrontdoorCustomDomainTls>;
}
