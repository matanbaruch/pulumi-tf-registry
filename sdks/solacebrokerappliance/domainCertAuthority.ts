// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DomainCertAuthority extends pulumi.CustomResource {
    /**
     * Get an existing DomainCertAuthority resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DomainCertAuthorityState, opts?: pulumi.CustomResourceOptions): DomainCertAuthority {
        return new DomainCertAuthority(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebrokerappliance:index/domainCertAuthority:DomainCertAuthority';

    /**
     * Returns true if the given object is an instance of DomainCertAuthority.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DomainCertAuthority {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DomainCertAuthority.__pulumiType;
    }

    /**
     * The name of the Certificate Authority.
     */
    public readonly certAuthorityName!: pulumi.Output<string>;
    /**
     * The PEM formatted content for the trusted root certificate of a domain Certificate Authority. Changes to this attribute
     * are synchronized to HA mates via config-sync. The default value is `""`.
     */
    public readonly certContent!: pulumi.Output<string | undefined>;

    /**
     * Create a DomainCertAuthority resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainCertAuthorityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DomainCertAuthorityArgs | DomainCertAuthorityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DomainCertAuthorityState | undefined;
            resourceInputs["certAuthorityName"] = state ? state.certAuthorityName : undefined;
            resourceInputs["certContent"] = state ? state.certContent : undefined;
        } else {
            const args = argsOrState as DomainCertAuthorityArgs | undefined;
            if ((!args || args.certAuthorityName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certAuthorityName'");
            }
            resourceInputs["certAuthorityName"] = args ? args.certAuthorityName : undefined;
            resourceInputs["certContent"] = args ? args.certContent : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DomainCertAuthority.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DomainCertAuthority resources.
 */
export interface DomainCertAuthorityState {
    /**
     * The name of the Certificate Authority.
     */
    certAuthorityName?: pulumi.Input<string>;
    /**
     * The PEM formatted content for the trusted root certificate of a domain Certificate Authority. Changes to this attribute
     * are synchronized to HA mates via config-sync. The default value is `""`.
     */
    certContent?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DomainCertAuthority resource.
 */
export interface DomainCertAuthorityArgs {
    /**
     * The name of the Certificate Authority.
     */
    certAuthorityName: pulumi.Input<string>;
    /**
     * The PEM formatted content for the trusted root certificate of a domain Certificate Authority. Changes to this attribute
     * are synchronized to HA mates via config-sync. The default value is `""`.
     */
    certContent?: pulumi.Input<string>;
}
