// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudVrfLeakRoutes extends pulumi.CustomResource {
    /**
     * Get an existing CloudVrfLeakRoutes resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudVrfLeakRoutesState, opts?: pulumi.CustomResourceOptions): CloudVrfLeakRoutes {
        return new CloudVrfLeakRoutes(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/cloudVrfLeakRoutes:CloudVrfLeakRoutes';

    /**
     * Returns true if the given object is an instance of CloudVrfLeakRoutes.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudVrfLeakRoutes {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudVrfLeakRoutes.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly leakTos!: pulumi.Output<outputs.CloudVrfLeakRoutesLeakTo[] | undefined>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly vrfDn!: pulumi.Output<string>;

    /**
     * Create a CloudVrfLeakRoutes resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudVrfLeakRoutesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudVrfLeakRoutesArgs | CloudVrfLeakRoutesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudVrfLeakRoutesState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["leakTos"] = state ? state.leakTos : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["vrfDn"] = state ? state.vrfDn : undefined;
        } else {
            const args = argsOrState as CloudVrfLeakRoutesArgs | undefined;
            if ((!args || args.vrfDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vrfDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["leakTos"] = args ? args.leakTos : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["vrfDn"] = args ? args.vrfDn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudVrfLeakRoutes.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudVrfLeakRoutes resources.
 */
export interface CloudVrfLeakRoutesState {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    leakTos?: pulumi.Input<pulumi.Input<inputs.CloudVrfLeakRoutesLeakTo>[]>;
    nameAlias?: pulumi.Input<string>;
    vrfDn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudVrfLeakRoutes resource.
 */
export interface CloudVrfLeakRoutesArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    leakTos?: pulumi.Input<pulumi.Input<inputs.CloudVrfLeakRoutesLeakTo>[]>;
    nameAlias?: pulumi.Input<string>;
    vrfDn: pulumi.Input<string>;
}
