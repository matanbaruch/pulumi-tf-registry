// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cgnv6MapTranslationDefaultDomain extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6MapTranslationDefaultDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6MapTranslationDefaultDomainState, opts?: pulumi.CustomResourceOptions): Cgnv6MapTranslationDefaultDomain {
        return new Cgnv6MapTranslationDefaultDomain(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6MapTranslationDefaultDomain:Cgnv6MapTranslationDefaultDomain';

    /**
     * Returns true if the given object is an instance of Cgnv6MapTranslationDefaultDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6MapTranslationDefaultDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6MapTranslationDefaultDomain.__pulumiType;
    }

    /**
     * MAP-T domain name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Cgnv6MapTranslationDefaultDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Cgnv6MapTranslationDefaultDomainArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6MapTranslationDefaultDomainArgs | Cgnv6MapTranslationDefaultDomainState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6MapTranslationDefaultDomainState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as Cgnv6MapTranslationDefaultDomainArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6MapTranslationDefaultDomain.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6MapTranslationDefaultDomain resources.
 */
export interface Cgnv6MapTranslationDefaultDomainState {
    /**
     * MAP-T domain name
     */
    name?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cgnv6MapTranslationDefaultDomain resource.
 */
export interface Cgnv6MapTranslationDefaultDomainArgs {
    /**
     * MAP-T domain name
     */
    name?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
