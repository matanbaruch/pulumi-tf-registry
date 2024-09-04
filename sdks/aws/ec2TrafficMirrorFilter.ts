// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Ec2TrafficMirrorFilter extends pulumi.CustomResource {
    /**
     * Get an existing Ec2TrafficMirrorFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ec2TrafficMirrorFilterState, opts?: pulumi.CustomResourceOptions): Ec2TrafficMirrorFilter {
        return new Ec2TrafficMirrorFilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/ec2TrafficMirrorFilter:Ec2TrafficMirrorFilter';

    /**
     * Returns true if the given object is an instance of Ec2TrafficMirrorFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ec2TrafficMirrorFilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ec2TrafficMirrorFilter.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly networkServices!: pulumi.Output<string[] | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a Ec2TrafficMirrorFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Ec2TrafficMirrorFilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ec2TrafficMirrorFilterArgs | Ec2TrafficMirrorFilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ec2TrafficMirrorFilterState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["networkServices"] = state ? state.networkServices : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as Ec2TrafficMirrorFilterArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["networkServices"] = args ? args.networkServices : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ec2TrafficMirrorFilter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ec2TrafficMirrorFilter resources.
 */
export interface Ec2TrafficMirrorFilterState {
    arn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    networkServices?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a Ec2TrafficMirrorFilter resource.
 */
export interface Ec2TrafficMirrorFilterArgs {
    description?: pulumi.Input<string>;
    networkServices?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
