// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SharedfilesystemShareAccessV2 extends pulumi.CustomResource {
    /**
     * Get an existing SharedfilesystemShareAccessV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SharedfilesystemShareAccessV2State, opts?: pulumi.CustomResourceOptions): SharedfilesystemShareAccessV2 {
        return new SharedfilesystemShareAccessV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nhncloud:index/sharedfilesystemShareAccessV2:SharedfilesystemShareAccessV2';

    /**
     * Returns true if the given object is an instance of SharedfilesystemShareAccessV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SharedfilesystemShareAccessV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SharedfilesystemShareAccessV2.__pulumiType;
    }

    public /*out*/ readonly accessKey!: pulumi.Output<string>;
    public readonly accessLevel!: pulumi.Output<string>;
    public readonly accessTo!: pulumi.Output<string>;
    public readonly accessType!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly shareId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SharedfilesystemShareAccessV2Timeouts | undefined>;

    /**
     * Create a SharedfilesystemShareAccessV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SharedfilesystemShareAccessV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SharedfilesystemShareAccessV2Args | SharedfilesystemShareAccessV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SharedfilesystemShareAccessV2State | undefined;
            resourceInputs["accessKey"] = state ? state.accessKey : undefined;
            resourceInputs["accessLevel"] = state ? state.accessLevel : undefined;
            resourceInputs["accessTo"] = state ? state.accessTo : undefined;
            resourceInputs["accessType"] = state ? state.accessType : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["shareId"] = state ? state.shareId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SharedfilesystemShareAccessV2Args | undefined;
            if ((!args || args.accessLevel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessLevel'");
            }
            if ((!args || args.accessTo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessTo'");
            }
            if ((!args || args.accessType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessType'");
            }
            if ((!args || args.shareId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shareId'");
            }
            resourceInputs["accessLevel"] = args ? args.accessLevel : undefined;
            resourceInputs["accessTo"] = args ? args.accessTo : undefined;
            resourceInputs["accessType"] = args ? args.accessType : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["shareId"] = args ? args.shareId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["accessKey"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SharedfilesystemShareAccessV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SharedfilesystemShareAccessV2 resources.
 */
export interface SharedfilesystemShareAccessV2State {
    accessKey?: pulumi.Input<string>;
    accessLevel?: pulumi.Input<string>;
    accessTo?: pulumi.Input<string>;
    accessType?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    shareId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SharedfilesystemShareAccessV2Timeouts>;
}

/**
 * The set of arguments for constructing a SharedfilesystemShareAccessV2 resource.
 */
export interface SharedfilesystemShareAccessV2Args {
    accessLevel: pulumi.Input<string>;
    accessTo: pulumi.Input<string>;
    accessType: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    shareId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SharedfilesystemShareAccessV2Timeouts>;
}
