// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TrustsecIpToSgtMappingGroup extends pulumi.CustomResource {
    /**
     * Get an existing TrustsecIpToSgtMappingGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TrustsecIpToSgtMappingGroupState, opts?: pulumi.CustomResourceOptions): TrustsecIpToSgtMappingGroup {
        return new TrustsecIpToSgtMappingGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ise:index/trustsecIpToSgtMappingGroup:TrustsecIpToSgtMappingGroup';

    /**
     * Returns true if the given object is an instance of TrustsecIpToSgtMappingGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TrustsecIpToSgtMappingGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TrustsecIpToSgtMappingGroup.__pulumiType;
    }

    /**
     * Mandatory unless `deploy_type` is `ALL`
     */
    public readonly deployTo!: pulumi.Output<string | undefined>;
    /**
     * Deploy Type - Choices: `ALL`, `ND`, `NDG`
     */
    public readonly deployType!: pulumi.Output<string>;
    /**
     * Description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of the IP to SGT mapping Group
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Trustsec Security Group ID
     */
    public readonly sgt!: pulumi.Output<string>;

    /**
     * Create a TrustsecIpToSgtMappingGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TrustsecIpToSgtMappingGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TrustsecIpToSgtMappingGroupArgs | TrustsecIpToSgtMappingGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TrustsecIpToSgtMappingGroupState | undefined;
            resourceInputs["deployTo"] = state ? state.deployTo : undefined;
            resourceInputs["deployType"] = state ? state.deployType : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sgt"] = state ? state.sgt : undefined;
        } else {
            const args = argsOrState as TrustsecIpToSgtMappingGroupArgs | undefined;
            if ((!args || args.deployType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deployType'");
            }
            if ((!args || args.sgt === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sgt'");
            }
            resourceInputs["deployTo"] = args ? args.deployTo : undefined;
            resourceInputs["deployType"] = args ? args.deployType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["sgt"] = args ? args.sgt : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TrustsecIpToSgtMappingGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TrustsecIpToSgtMappingGroup resources.
 */
export interface TrustsecIpToSgtMappingGroupState {
    /**
     * Mandatory unless `deploy_type` is `ALL`
     */
    deployTo?: pulumi.Input<string>;
    /**
     * Deploy Type - Choices: `ALL`, `ND`, `NDG`
     */
    deployType?: pulumi.Input<string>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the IP to SGT mapping Group
     */
    name?: pulumi.Input<string>;
    /**
     * Trustsec Security Group ID
     */
    sgt?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TrustsecIpToSgtMappingGroup resource.
 */
export interface TrustsecIpToSgtMappingGroupArgs {
    /**
     * Mandatory unless `deploy_type` is `ALL`
     */
    deployTo?: pulumi.Input<string>;
    /**
     * Deploy Type - Choices: `ALL`, `ND`, `NDG`
     */
    deployType: pulumi.Input<string>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the IP to SGT mapping Group
     */
    name?: pulumi.Input<string>;
    /**
     * Trustsec Security Group ID
     */
    sgt: pulumi.Input<string>;
}
