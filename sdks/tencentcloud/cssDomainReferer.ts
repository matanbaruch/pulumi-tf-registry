// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CssDomainReferer extends pulumi.CustomResource {
    /**
     * Get an existing CssDomainReferer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CssDomainRefererState, opts?: pulumi.CustomResourceOptions): CssDomainReferer {
        return new CssDomainReferer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/cssDomainReferer:CssDomainReferer';

    /**
     * Returns true if the given object is an instance of CssDomainReferer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CssDomainReferer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CssDomainReferer.__pulumiType;
    }

    /**
     * Allow blank referers, 0: not allowed, 1: allowed.
     */
    public readonly allowEmpty!: pulumi.Output<number>;
    /**
     * Domain Name.
     */
    public readonly domainName!: pulumi.Output<string>;
    /**
     * Whether to enable the referer blacklist authentication of the current domain name,`0`: off, `1`: on.
     */
    public readonly enable!: pulumi.Output<number>;
    /**
     * The list of referers to; separate.
     */
    public readonly rules!: pulumi.Output<string>;
    /**
     * List type: 0: blacklist, 1: whitelist.
     */
    public readonly type!: pulumi.Output<number>;

    /**
     * Create a CssDomainReferer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CssDomainRefererArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CssDomainRefererArgs | CssDomainRefererState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CssDomainRefererState | undefined;
            resourceInputs["allowEmpty"] = state ? state.allowEmpty : undefined;
            resourceInputs["domainName"] = state ? state.domainName : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as CssDomainRefererArgs | undefined;
            if ((!args || args.allowEmpty === undefined) && !opts.urn) {
                throw new Error("Missing required property 'allowEmpty'");
            }
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            if ((!args || args.enable === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enable'");
            }
            if ((!args || args.rules === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rules'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["allowEmpty"] = args ? args.allowEmpty : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CssDomainReferer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CssDomainReferer resources.
 */
export interface CssDomainRefererState {
    /**
     * Allow blank referers, 0: not allowed, 1: allowed.
     */
    allowEmpty?: pulumi.Input<number>;
    /**
     * Domain Name.
     */
    domainName?: pulumi.Input<string>;
    /**
     * Whether to enable the referer blacklist authentication of the current domain name,`0`: off, `1`: on.
     */
    enable?: pulumi.Input<number>;
    /**
     * The list of referers to; separate.
     */
    rules?: pulumi.Input<string>;
    /**
     * List type: 0: blacklist, 1: whitelist.
     */
    type?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a CssDomainReferer resource.
 */
export interface CssDomainRefererArgs {
    /**
     * Allow blank referers, 0: not allowed, 1: allowed.
     */
    allowEmpty: pulumi.Input<number>;
    /**
     * Domain Name.
     */
    domainName: pulumi.Input<string>;
    /**
     * Whether to enable the referer blacklist authentication of the current domain name,`0`: off, `1`: on.
     */
    enable: pulumi.Input<number>;
    /**
     * The list of referers to; separate.
     */
    rules: pulumi.Input<string>;
    /**
     * List type: 0: blacklist, 1: whitelist.
     */
    type: pulumi.Input<number>;
}
