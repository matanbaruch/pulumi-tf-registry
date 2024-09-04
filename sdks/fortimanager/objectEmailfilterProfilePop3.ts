// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectEmailfilterProfilePop3 extends pulumi.CustomResource {
    /**
     * Get an existing ObjectEmailfilterProfilePop3 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectEmailfilterProfilePop3State, opts?: pulumi.CustomResourceOptions): ObjectEmailfilterProfilePop3 {
        return new ObjectEmailfilterProfilePop3(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectEmailfilterProfilePop3:ObjectEmailfilterProfilePop3';

    /**
     * Returns true if the given object is an instance of ObjectEmailfilterProfilePop3.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectEmailfilterProfilePop3 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectEmailfilterProfilePop3.__pulumiType;
    }

    public readonly action!: pulumi.Output<string | undefined>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly log!: pulumi.Output<string>;
    public readonly logAll!: pulumi.Output<string>;
    public readonly profile!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly tagMsg!: pulumi.Output<string | undefined>;
    public readonly tagTypes!: pulumi.Output<string[]>;

    /**
     * Create a ObjectEmailfilterProfilePop3 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectEmailfilterProfilePop3Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectEmailfilterProfilePop3Args | ObjectEmailfilterProfilePop3State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectEmailfilterProfilePop3State | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["log"] = state ? state.log : undefined;
            resourceInputs["logAll"] = state ? state.logAll : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["tagMsg"] = state ? state.tagMsg : undefined;
            resourceInputs["tagTypes"] = state ? state.tagTypes : undefined;
        } else {
            const args = argsOrState as ObjectEmailfilterProfilePop3Args | undefined;
            if ((!args || args.profile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profile'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["log"] = args ? args.log : undefined;
            resourceInputs["logAll"] = args ? args.logAll : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["tagMsg"] = args ? args.tagMsg : undefined;
            resourceInputs["tagTypes"] = args ? args.tagTypes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectEmailfilterProfilePop3.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectEmailfilterProfilePop3 resources.
 */
export interface ObjectEmailfilterProfilePop3State {
    action?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    log?: pulumi.Input<string>;
    logAll?: pulumi.Input<string>;
    profile?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    tagMsg?: pulumi.Input<string>;
    tagTypes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ObjectEmailfilterProfilePop3 resource.
 */
export interface ObjectEmailfilterProfilePop3Args {
    action?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    log?: pulumi.Input<string>;
    logAll?: pulumi.Input<string>;
    profile: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    tagMsg?: pulumi.Input<string>;
    tagTypes?: pulumi.Input<pulumi.Input<string>[]>;
}
