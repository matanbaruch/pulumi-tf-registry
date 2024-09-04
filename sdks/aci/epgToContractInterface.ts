// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class EpgToContractInterface extends pulumi.CustomResource {
    /**
     * Get an existing EpgToContractInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EpgToContractInterfaceState, opts?: pulumi.CustomResourceOptions): EpgToContractInterface {
        return new EpgToContractInterface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/epgToContractInterface:EpgToContractInterface';

    /**
     * Returns true if the given object is an instance of EpgToContractInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EpgToContractInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EpgToContractInterface.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly applicationEpgDn!: pulumi.Output<string>;
    public readonly contractInterfaceDn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly prio!: pulumi.Output<string>;

    /**
     * Create a EpgToContractInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EpgToContractInterfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EpgToContractInterfaceArgs | EpgToContractInterfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EpgToContractInterfaceState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["applicationEpgDn"] = state ? state.applicationEpgDn : undefined;
            resourceInputs["contractInterfaceDn"] = state ? state.contractInterfaceDn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["prio"] = state ? state.prio : undefined;
        } else {
            const args = argsOrState as EpgToContractInterfaceArgs | undefined;
            if ((!args || args.applicationEpgDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationEpgDn'");
            }
            if ((!args || args.contractInterfaceDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contractInterfaceDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["applicationEpgDn"] = args ? args.applicationEpgDn : undefined;
            resourceInputs["contractInterfaceDn"] = args ? args.contractInterfaceDn : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["prio"] = args ? args.prio : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EpgToContractInterface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EpgToContractInterface resources.
 */
export interface EpgToContractInterfaceState {
    annotation?: pulumi.Input<string>;
    applicationEpgDn?: pulumi.Input<string>;
    contractInterfaceDn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    prio?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EpgToContractInterface resource.
 */
export interface EpgToContractInterfaceArgs {
    annotation?: pulumi.Input<string>;
    applicationEpgDn: pulumi.Input<string>;
    contractInterfaceDn: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    prio?: pulumi.Input<string>;
}
