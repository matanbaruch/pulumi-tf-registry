// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SesDomainMailFrom extends pulumi.CustomResource {
    /**
     * Get an existing SesDomainMailFrom resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SesDomainMailFromState, opts?: pulumi.CustomResourceOptions): SesDomainMailFrom {
        return new SesDomainMailFrom(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/sesDomainMailFrom:SesDomainMailFrom';

    /**
     * Returns true if the given object is an instance of SesDomainMailFrom.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SesDomainMailFrom {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SesDomainMailFrom.__pulumiType;
    }

    public readonly behaviorOnMxFailure!: pulumi.Output<string | undefined>;
    public readonly domain!: pulumi.Output<string>;
    public readonly mailFromDomain!: pulumi.Output<string>;

    /**
     * Create a SesDomainMailFrom resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SesDomainMailFromArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SesDomainMailFromArgs | SesDomainMailFromState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SesDomainMailFromState | undefined;
            resourceInputs["behaviorOnMxFailure"] = state ? state.behaviorOnMxFailure : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["mailFromDomain"] = state ? state.mailFromDomain : undefined;
        } else {
            const args = argsOrState as SesDomainMailFromArgs | undefined;
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            if ((!args || args.mailFromDomain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mailFromDomain'");
            }
            resourceInputs["behaviorOnMxFailure"] = args ? args.behaviorOnMxFailure : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["mailFromDomain"] = args ? args.mailFromDomain : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SesDomainMailFrom.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SesDomainMailFrom resources.
 */
export interface SesDomainMailFromState {
    behaviorOnMxFailure?: pulumi.Input<string>;
    domain?: pulumi.Input<string>;
    mailFromDomain?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SesDomainMailFrom resource.
 */
export interface SesDomainMailFromArgs {
    behaviorOnMxFailure?: pulumi.Input<string>;
    domain: pulumi.Input<string>;
    mailFromDomain: pulumi.Input<string>;
}
